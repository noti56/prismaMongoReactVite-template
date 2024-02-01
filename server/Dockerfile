ARG MONGO_VERSION

FROM mongo:${MONGO_VERSION}

# Expose MongoDB port
EXPOSE 27017

# Set environment variables
ENV MONGO_INITDB_ROOT_USERNAME=root
ENV MONGO_INITDB_ROOT_PASSWORD=dbName
ENV MONGO_INITDB_DATABASE=rinaStyling
ENV MONGO_REPLICA_HOST=localhost
ENV MONGO_REPLICA_PORT=27017

# Copy the entrypoint script into the container
COPY entrypoint.sh /entrypoint.sh

# Make the script executable
RUN chmod +x /entrypoint.sh

# Run the entrypoint script
ENTRYPOINT ["/entrypoint.sh"]
