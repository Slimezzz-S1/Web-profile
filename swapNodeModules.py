from pathlib import Path
import os
import subprocess
import shutil

Folders :dict[str] = {
    'linux' : next((item for item in os.listdir() if item.endswith('linux')), None),
    'windows' : next((item for item in os.listdir() if item.endswith('windows')), None)
}

def copyFolder(targetFolderPath :str | Path, newFolderName :str | Path) -> bool:
    try:
        subprocess.run(['robocopy', targetFolderPath, newFolderName, '/E', '/Z'])
        return True
    
    except Exception as e:  
        print('Error :', e)

    return False

def generateFolder(targetFolderPath :str | Path, sourceFolderPath :str | Path) -> bool:
    if os.path.exists(targetFolderPath):
        shutil.rmtree(targetFolderPath)
    
    copyFolder(sourceFolderPath, targetFolderPath)

if os.name == 'nt':
    generateFolder('node_modules', Folders['windows'])
else:
    generateFolder('node_modules', Folders['linux'])