FROM node:14.16.1-slim
RUN apt-get update && apt-get install -y --no-install-recommends \
    vim \
    wget \
    bash \
    curl \
    && apt-get -y clean \
    && rm -rf /var/lib/apt/lists/*
COPY ./app /home/app
COPY ./app/.vscode /root/.vscode-server/data/Machine

WORKDIR /home/app
EXPOSE 5500
# RUN npm install

# CMD ["npm", "start"]
CMD ["bash"]