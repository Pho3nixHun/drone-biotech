# See here for image contents: https://github.com/microsoft/vscode-dev-containers/tree/v0.177.0/containers/javascript-node/.devcontainer/base.Dockerfile

# [Choice] Node.js version: 16, 14, 12
ARG VARIANT="1.0-20-bookworm"
FROM mcr.microsoft.com/devcontainers/typescript-node:${VARIANT}

# [Optional] Uncomment this section to install additional OS packages.
RUN apt update && export DEBIAN_FRONTEND=noninteractive \
    && apt -y install --no-install-recommends curl wget zsh git net-tools iproute2 vim nano \
    && apt -y install chromium \
    && apt clean \
    && echo 'export CHROME_BIN=/usr/bin/chromium' >> /home/node/.bashrc

# [Optional] Uncomment if you want to install an additional version of node using nvm
# ARG EXTRA_NODE_VERSION=10
# RUN su node -c "source /usr/local/share/nvm/nvm.sh && nvm install ${EXTRA_NODE_VERSION}"
USER node

# [Optional] Uncomment if you want to install more global node modules
RUN npm install -g npm @angular/cli@17.2 @angular/core@17.2.1 typescript@5.2.2

# [Optional] Install OhMyZsh
# RUN sh -c "$(wget https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh -O -)"

# [Optional] Install PW10K theme for OhMyZsh
RUN git clone --depth=1 https://github.com/romkatv/powerlevel10k.git ${ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k

COPY ./.p10k.zsh /home/node/
COPY ./.zshrc /home/node/
ADD --chown=node:node ./.ssh /home/node/.ssh

# [Optional] Install GH CLI
RUN (type -p wget >/dev/null || (sudo apt update && sudo apt install wget -y)) \
    && sudo mkdir -p -m 755 /etc/apt/keyrings \
    && wget -qO- https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo tee /etc/apt/keyrings/githubcli-archive-keyring.gpg > /dev/null \
    && sudo chmod go+r /etc/apt/keyrings/githubcli-archive-keyring.gpg \
    && echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null \
    && sudo apt update \
    && sudo apt install gh -y \
    && sudo apt clean
