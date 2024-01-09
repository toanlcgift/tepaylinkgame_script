import lief

libnative = lief.parse("libMyGame.so")
libnative.add_library("frida-gadget-16.1.8-android-arm.so")
libnative.add_library("libnativehook.so")
libnative.write("libMyGameMod.so")