@echo off
setlocal enabledelayedexpansion

REM Set the root folder containing your SVG files (adjust as needed)
set "ROOTFOLDER=external"

REM Loop through all SVG files in ROOTFOLDER and subfolders
for /R "%ROOTFOLDER%" %%F in (*.svg) do (
    set "svg=%%F"
    set "pdf=%%~dpnF.pdf"
    echo Converting !svg! to !pdf!
    "C:\Program Files\Inkscape\bin\inkscape.exe" "!svg!" --export-type=pdf --export-filename="!pdf!"
)

echo All SVGs have been converted.
pause
