FROM fusuf/whatsasena:latest

RUN git clone https://github.com/xzendercage /root/nisa
WORKDIR /root/nisa/
ENV TZ=Asia/Kolkata
RUN npm install deepai
RUN npm install supervisor -g
RUN npm install

CMD ["node", "bot.js"]
