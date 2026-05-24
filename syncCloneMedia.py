from pathlib import Path
import os
import subprocess

ROOTMEDIA : str | Path = next((path for path in os.listdir() if path == 'Media'), None)
TARGETPATH : str | Path = r'IndividualPortfolio\Ahmad'

subprocess.run(['robocopy', ROOTMEDIA, str(Path(TARGETPATH) / Path(ROOTMEDIA)), '/E', '/Z'])