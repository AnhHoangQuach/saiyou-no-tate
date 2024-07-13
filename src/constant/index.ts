export const packageServiceDescriptions: PackageConfigDescription[] = [
  {
    description: "Tìm kiếm và đặt chỗ nội địa",
    key: "allowDomesticSearch",
    value: true,
  },
  {
    description: "Bộ lọc và sắp xếp chuyến bay",
    key: "allowFilterAndSort",
    value: true,
  },
  {
    description: "Hiển thị ngày lân cận",
    key: "allowShowNearbyDate",
    value: true,
  },
  {
    description: "Quản lý thông tin yêu cầu xuất Hóa đơn VAT",
    key: "allowManageVatInvoice",
    value: true,
  },
  {
    description: "Quản lý cầu hình phí dịch vụ/Phí xuất vé",
    key: "allowManageServiceFee",
    value: true,
  },
  {
    description: "Gửi email đơn hàng/Xác nhận thanh toán",
    key: "allowSendEmail",
    value: true,
  },
  {
    description: "Hệ thống thao tác vé chuyên nghiệp cho đại lý",
    key: "allowProfessionalTicketing",
    value: true,
  },
  {
    description: "Quản lý danh sách vé đặt",
    key: "allowManageBookingList",
    value: true,
  },
  {
    description: "Quản lý báo cáo, công nợ",
    key: "allowManageReport",
    value: true,
  },
  {
    description: "Tra cứu chuyến bay/Đơn hàng đã đặt/giữ chỗ",
    key: "allowSearchBooking",
    value: true,
  },
  {
    description: "Ban/Unban IP Khách lẻ giao dịch bất thường",
    key: "allowBanUnbanIp",
    value: true,
  },
  {
    description: "Giới hạn tìm kiếm",
    key: "searchLimit",
    value: 100,
  },
  {
    description: "Giới hạn đặt vé",
    key: "bookLimit",
    value: 50,
  },
  {
    description: "Giới hạn xuất vé",
    key: "issueLimit",
    value: 25,
  },
  {
    description: "Giới hạn số lượng khách đặt vé",
    key: "paxLimit",
    value: 6,
  },
  {
    description: "Tự động xuất vé khi thanh toán",
    key: "autoIssueTicket",
    value: false,
  },
  {
    description: "Phí tự động xuất vé",
    key: "feeTransaction",
    value: 0,
  },
  {
    description: "Hỗ trợ quản lý booking ảo",
    key: "enableDraft",
    value: true,
  },
  {
    description: "Thanh toán QR",
    key: "enableQR",
    value: true,
  },
  {
    description: "Tìm kiếm và đặt chỗ quốc tế",
    key: "allowInternationalSearch",
    value: false,
  },
  {
    description: "Tìm kiếm nhiều chặng",
    key: "allowMultiSegmentsSearch",
    value: false,
  },
]

export const packageWebDescriptions: PackageConfigDescription[] = [
  {
    description: "Số lượng giao diện website",
    key: "numberOfTheme",
    value: 5,
  },
  {
    description: "Chi phí máy chủ",
    key: "costOfService",
    value: "Miễn phí",
  },
  {
    description: "Băng thông / dung lượng",
    key: "bandwidth",
    value: "Không giới hạn",
  },
  {
    description: "Tốc độ website",
    key: "speedOfNetwork",
    value: "Cam kết dưới 3 giây",
  },
]
