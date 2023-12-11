
import frida


device = frida.get_usb_device()

processes = device.enumerate_processes(scope="full")
for proc in processes:
    params = dict(proc.parameters)
    if "Mobile" in proc.name:
        print(proc.name + ' | ' + str(proc.pid))
print('Bye')