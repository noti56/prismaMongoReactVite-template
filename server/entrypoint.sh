#!/bin/bash

# Start MongoDB in replica set mode
mongod --port $MONGO_REPLICA_PORT --replSet rs0 --bind_ip 0.0.0.0 &

# Wait for MongoDB to be ready
until mongo --port $MONGO_REPLICA_PORT --eval "print(\"waited for connection\")"; do sleep 1; done

# Initialize the replica set
mongo --port $MONGO_REPLICA_PORT --eval "rs.initiate({ _id: 'rs0', members: [{ _id: 0, host: '$MONGO_REPLICA_HOST:$MONGO_REPLICA_PORT' }] })"

# Keep the container alive
tail -f /dev/null
