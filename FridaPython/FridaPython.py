import sys
import time
import frida

device = frida.get_usb_device()

def on_message(message, data):
    print("[on_message] message:", message, "data:", data)

processes = device.enumerate_processes(scope="full")
for proc in processes:
    params = dict(proc.parameters)
    if "Mobile" in proc.name:
        print(proc.name + ' | ' + str(proc.pid))
        session = device.attach(proc.pid)
        with open("_agent.js") as f:
            abc = f.read()
            script = session.create_script(f.read())
        script.on("message", on_message)
        script.load()

command = ""

while 1 == 1:
    command = input("Enter command:")
    if command == "1":
        break
    elif command == "2":
        script.exports_async.logvaluefunc()