"""Build the static bilingual explanation data; no runtime dependencies."""
import argparse
import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
DEFAULT_SOURCE = ROOT.parent / 'docs' / 'ITS_Python_題庫詳解.md'
LOCAL_OUTPUT = ROOT.parent / 'docs' / 'website-source' / 'explanations.js'


def build(source_path=DEFAULT_SOURCE):
    source = source_path.read_text(encoding='utf-8')
    sections = re.split(r'^## Q(\d{2})\s*$', source, flags=re.MULTILINE)
    numbers = [int(sections[i]) for i in range(1, len(sections), 2)]
    if numbers != list(range(1, 83)):
        raise ValueError('Expected Q01 through Q82 exactly once, in order')
    data = {}
    for i in range(1, len(sections), 2):
        number, body = int(sections[i]), sections[i + 1]
        key = str(number) if number <= 77 else f'補充{number - 77}'
        data[key] = {}
        for language, prefix in [('zh-Hant', '- 中文：'), ('en', '- English: ')]:
            matches = re.findall(r'^' + re.escape(prefix) + r'(.+)$', body, re.MULTILINE)
            if len(matches) != 1 or not matches[0].strip():
                raise ValueError(f'Missing or duplicate {language} explanation for Q{number:02}')
            data[key][language] = matches[0].strip()
    return ('// Generated from ITS_Python_題庫詳解.md by scripts/build-explanations.py.\n'
            'window.ITS_EXPLANATIONS = ' + json.dumps(data, ensure_ascii=False, indent=2) + ';\n')


if __name__ == '__main__':
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true', help='Check that generated data is current')
    parser.add_argument('--source', type=Path, default=DEFAULT_SOURCE,
                        help='Local Markdown source (default: parent directory of the repository)')
    args = parser.parse_args()
    if not args.source.is_file():
        parser.error('Local explanation source not found; specify its path with --source')
    output = LOCAL_OUTPUT
    generated = build(args.source)
    if args.check:
        if not output.exists() or output.read_text(encoding='utf-8') != generated:
            raise SystemExit('Explanation data is out of date; run python scripts/build-explanations.py')
        print('PASS: 82 bilingual explanations match their Markdown source.')
    else:
        output.parent.mkdir(parents=True, exist_ok=True)
        output.write_text(generated, encoding='utf-8')
        print('Generated local explanation source. Run node scripts/build-data.cjs to update the website.')
