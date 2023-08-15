# Sử dụng một hình ảnh Node.js có sẵn
FROM node:18.17.1

# Tạo thư mục làm việc trong hình ảnh
WORKDIR /var/www/html

# Sao chép tệp package.json và package-lock.json vào thư mục làm việc
COPY package*.json ./

# Cài đặt các phụ thuộc
RUN npm install

# Sao chép toàn bộ mã nguồn ứng dụng vào thư mục làm việc
COPY . .

RUN npm install -g sequelize-cli

# Khai báo cổng mà ứng dụng Express sẽ lắng nghe
EXPOSE 3000

# Khởi chạy ứng dụng khi hình ảnh được chạy trong container
CMD ["node", "server.js"]
