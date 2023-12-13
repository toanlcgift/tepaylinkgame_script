import time
import frida
import sys

package_name = "com.tepaylink.kiemhieptinh2mobile"


def get_messages_from_js(message, data): #print(message)
    print(message)


def instrument_debugger_checks():
    with open("_agent.js") as f:
            hook_code = f.read()
            time.sleep(5)
    return hook_code

device = frida.get_usb_device()# run package
p1 = device.spawn([package_name])
process = device.attach(p1)
script = process.create_script(instrument_debugger_checks())
script.on('message', get_messages_from_js)
script.load()# Extremely important to add this else the app would freeze
time.sleep(2)
device.resume(p1)
sys.stdin.read()