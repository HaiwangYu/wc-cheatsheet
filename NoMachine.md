# How to kill a remote session from physical display
https://forums.nomachine.com/topic/how-to-kill-a-remote-session-from-physical-display

```bash
sudo /etc/NX/nxserver --history | grep Connected
sudo /etc/NX/nxserver --terminate <session ID>
```
