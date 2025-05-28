# Ban Hang Website

## Mô Tả Dự Án
Dự án "Ban Hang Website" là một ứng dụng web bán hàng được xây dựng bằng React và TypeScript. Ứng dụng cho phép người dùng duyệt qua các sản phẩm, thêm chúng vào giỏ hàng và thực hiện thanh toán.

## Cấu Trúc Dự Án
Dự án bao gồm các thư mục và tệp sau:

- **src/**: Chứa mã nguồn của ứng dụng.
  - **components/**: Chứa các thành phần giao diện người dùng.
    - `Header.tsx`: Thành phần hiển thị thanh điều hướng và logo.
    - `Footer.tsx`: Thành phần hiển thị thông tin chân trang.
    - `ProductList.tsx`: Thành phần hiển thị danh sách sản phẩm.
    - `Cart.tsx`: Thành phần hiển thị giỏ hàng.
  - **pages/**: Chứa các trang của ứng dụng.
    - `Home.tsx`: Trang chính của ứng dụng.
    - `ProductDetail.tsx`: Trang chi tiết sản phẩm.
    - `Cart.tsx`: Trang giỏ hàng.
    - `Checkout.tsx`: Trang thanh toán.
  - **styles/**: Chứa các tệp CSS cho ứng dụng.
    - `main.css`: Tệp CSS chính cho ứng dụng.
  - **types/**: Chứa các kiểu dữ liệu TypeScript.
    - `index.ts`: Tệp định nghĩa các interface và type.

- **public/**: Chứa tệp HTML chính cho ứng dụng.
  - `index.html`: Tệp HTML chính.

- `package.json`: Tệp cấu hình cho npm, liệt kê các phụ thuộc và thông tin dự án.
- `tsconfig.json`: Tệp cấu hình cho TypeScript.

## Hướng Dẫn Cài Đặt
1. Clone dự án về máy:
   ```
   git clone <repository-url>
   ```
2. Di chuyển vào thư mục dự án:
   ```
   cd ban-hang-website
   ```
3. Cài đặt các phụ thuộc:
   ```
   npm install
   ```
4. Chạy ứng dụng:
   ```
   npm start
   ```

## Tính Năng
- Duyệt qua danh sách sản phẩm.
- Thêm sản phẩm vào giỏ hàng.
- Xem chi tiết sản phẩm.
- Quản lý giỏ hàng (cập nhật số lượng, xóa sản phẩm).
- Thực hiện thanh toán.

## Sử Dụng
Truy cập vào `http://localhost:3000` để sử dụng ứng dụng sau khi đã khởi động.