@echo off
:: Ganti path di bawah sesuai lokasi file ngrok.exe kamu
cd /d C:\Users\Jodi\Downloads

:: Tambahkan authtoken (aman dijalankan berulang)
ngrok config add-authtoken 2zm3i3oBAbyOyUgix4fppaoPWLL_3oJd6G4wn2rFiLdXmCz1R

:: Jalankan tunnel ke port 5678
ngrok http 5678

pause
