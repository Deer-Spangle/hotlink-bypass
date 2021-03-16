#!/bin/bash

# Get the pid file's name.
PIDFILE="pidfile.pid"

# Kill the process running at pid.
if [ -e $PIDFILE ]; then
  kill "$(cat $PIDFILE 2>/dev/null)"
fi

# Write our pid to file.
echo $$ >$PIDFILE

# Run command.
node bin/www > hotlink.log
