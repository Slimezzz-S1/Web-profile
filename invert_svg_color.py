from pathlib import Path
import os
import subprocess

# THIS IS FOR LINUX

PATH : Path = Path('Media/Icons')
NEWFOLDER : string | Path = Path('inverted')

icons :list[string | Path] = [f for f in os.listdir(PATH) if os.path.isfile(os.path.join(PATH, f))]

if not os.path.exists(str(PATH / NEWFOLDER)):
    os.makedirs(str(PATH / NEWFOLDER))

for icon in icons:
    with open(str(PATH / icon), 'r') as originalIcon:
        with open(str(PATH / NEWFOLDER / Path(icon)), 'w') as newIcon:
            newIcon.write(str(originalIcon.read()).replace('currentColor', '#ffffff'))