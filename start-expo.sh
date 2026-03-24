#!/bin/bash

cd ~/projects/my-app || {echo " Pasta do projeto não enccontrada!"}

# Pega IP do Windows (mais robusto)
WINDOWS_IP=$(powershell.exe ipconfig | grep -E "IPv4|Endereço IPv4" | grep -E "192\.168|10\." | head -1 | sed 's/.*: *//' | tr -d '[:space:]')

if [ -z "$WINDOWS_IP" ]; then
  echo "❌ Não achei IP válido (192.168 ou 10.). Rode 'powershell.exe ipconfig' para ver."
  exit 1
fi


echo "$WINDOWS_IP"
echo "iniciando Expo com IP:$WINDOWS_IP"
echo "Abra o Expo Go no seu celular e escaneie o QR Code"
echo "--- Boa sorte, nesta jornada! --- "
REACT_NATIVE_PACKAGER_HOSTNAME=$WINDOWS_IP npx expo start --lan
