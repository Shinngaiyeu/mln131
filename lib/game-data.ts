export interface Option {
  id: string
  text: string
  effect: {
    economy: number
    society: number
    knowledge: number
  }
  explanation: string
}

export interface Question {
  id: number
  scenario: string
  options: Option[]
}

export const questions: Question[] = [
  {
    id: 1,
    scenario: "Bắt đầu hành trình: Ngân sách quốc gia đang hạn hẹp. Bạn chọn ưu tiên đầu tư vào đâu?",
    options: [
      {
        id: "A",
        text: "Xóa mù chữ và phổ cập giáo dục tiểu học.",
        effect: { economy: -5, society: 10, knowledge: 20 },
        explanation: "Dân trí là nền tảng, tri thức sẽ tạo sức mạnh lâu dài.",
      },
      {
        id: "B",
        text: "Xây tượng đài lớn để khích lệ tinh thần.",
        effect: { economy: -20, society: 5, knowledge: -5 },
        explanation: "Hình thức hào nhoáng nhưng thiếu nội dung, lãng phí tài nguyên.",
      },
      {
        id: "C",
        text: "Bán tài nguyên thô để lấy tiền nhanh.",
        effect: { economy: 15, society: -5, knowledge: -10 },
        explanation: "Kinh tế tăng nhưng cạn kiệt tài nguyên và tụt hậu về tri thức.",
      },
      {
        id: "D",
        text: "Không làm gì cả, tiết kiệm tiền.",
        effect: { economy: 0, society: -10, knowledge: -10 },
        explanation: "Không có phát triển, dân tâm càng lạnh lẽo.",
      },
    ],
  },
  {
    id: 2,
    scenario: "Nông dân đang thiếu đất sản xuất. Bạn giải quyết thế nào?",
    options: [
      {
        id: "A",
        text: "Lấy đất của địa chủ chia đều cho dân.",
        effect: { economy: -10, society: 25, knowledge: 5 },
        explanation: "Công bằng xã hội, dân chúng hết thân phận nô lệ.",
      },
      {
        id: "B",
        text: "Quy hoạch lại đất đai, khuyến khích mô hình hợp tác xã.",
        effect: { economy: 10, society: 15, knowledge: 10 },
        explanation: "Giải pháp cân bằng giữa kinh tế và công bằng.",
      },
      {
        id: "C",
        text: "Giao hết đất cho doanh nghiệp lớn làm trang trại.",
        effect: { economy: 20, society: -20, knowledge: 5 },
        explanation: "Nông dân mất đất, bất bình đẳng gia tăng.",
      },
      {
        id: "D",
        text: "Mặc kệ nông dân tự khai hoang.",
        effect: { economy: 0, society: -10, knowledge: 0 },
        explanation: "Vô trách nhiệm, tạo xung đột tiềm ẩn.",
      },
    ],
  },
  {
    id: 3,
    scenario: "Y tế cơ sở đang thiếu thốn thuốc men.",
    options: [
      {
        id: "A",
        text: "Đầu tư ngân sách nhập thuốc tốt giá rẻ cho dân.",
        effect: { economy: -10, society: 20, knowledge: 5 },
        explanation: "Nhà nước chăm sóc dân chúng, xã hội ổn định.",
      },
      {
        id: "B",
        text: "Xã hội hóa y tế, cho tư nhân mở bệnh viện.",
        effect: { economy: 15, society: 5, knowledge: 10 },
        explanation: "Kinh tế tăng nhưng người nghèo không đủ tiền chữa bệnh.",
      },
      {
        id: "C",
        text: "Chỉ chữa cho người có tiền.",
        effect: { economy: 10, society: -30, knowledge: -5 },
        explanation: "Tàn nhẫn, gây phẫn nộ sâu sắc trong xã hội.",
      },
      {
        id: "D",
        text: "Khuyên dân dùng thuốc nam tự chữa.",
        effect: { economy: 0, society: -5, knowledge: -10 },
        explanation: "Giảm bớt chi phí nhưng rủi ro sức khỏe quốc dân.",
      },
    ],
  },
  {
    id: 4,
    scenario: "Trật tự xã hội ở thành phố phức tạp, trộm cắp gia tăng.",
    options: [
      {
        id: "A",
        text: "Tăng cường cảnh sát và camera an ninh.",
        effect: { economy: -5, society: 15, knowledge: 5 },
        explanation: "Tăng sự an toàn, dân yên tâm sống.",
      },
      {
        id: "B",
        text: "Tạo thêm việc làm để giảm thất nghiệp.",
        effect: { economy: 10, society: 20, knowledge: 5 },
        explanation: "Giải quyết gốc rễ vấn đề, dân có việc làm sẽ không phạm tội.",
      },
      {
        id: "C",
        text: "Bắt giam hết những người vô gia cư.",
        effect: { economy: -5, society: -20, knowledge: 0 },
        explanation: "Chuyên chế, gây phẫn nộ, không giải quyết được vấn đề.",
      },
      {
        id: "D",
        text: "Khuyến khích dân tự trang bị vũ khí.",
        effect: { economy: 0, society: -30, knowledge: -10 },
        explanation: "Tạo ra xã hội bạo lực, thảm họa.",
      },
    ],
  },
  {
    id: 5,
    scenario: "Cần xây dựng đường cao tốc Bắc - Nam.",
    options: [
      {
        id: "A",
        text: "Vay vốn nước ngoài làm cho nhanh.",
        effect: { economy: 15, society: 5, knowledge: 0 },
        explanation: "Xây dựng nhanh nhưng mắc nợ nước ngoài lâu dài.",
      },
      {
        id: "B",
        text: "Huy động vốn trong nước, tự lực thiết kế thi công.",
        effect: { economy: -5, society: 10, knowledge: 15 },
        explanation: "Chậm nhưng tự chủ, nâng cao tri thức công nghiệp.",
      },
      {
        id: "C",
        text: "In tiền để xây.",
        effect: { economy: -30, society: -10, knowledge: 0 },
        explanation: "Gây lạm phát, kinh tế sụp đổ.",
      },
      {
        id: "D",
        text: "Không xây, đi đường cũ cũng được.",
        effect: { economy: -10, society: -5, knowledge: -5 },
        explanation: "Tụt hậu, kinh tế không phát triển.",
      },
    ],
  },
  {
    id: 6,
    scenario: "Giáo dục đại học: Nên thu học phí hay miễn phí?",
    options: [
      {
        id: "A",
        text: "Miễn phí hoàn toàn, nhà nước bao cấp.",
        effect: { economy: -20, society: 20, knowledge: 10 },
        explanation: "Công bằng giáo dục, nhưng tốn ngân sách lớn.",
      },
      {
        id: "B",
        text: "Thu học phí vừa phải, có học bổng cho người nghèo.",
        effect: { economy: 10, society: 10, knowledge: 10 },
        explanation: "Cân bằng hợp lý giữa tài chính và công bằng.",
      },
      {
        id: "C",
        text: "Thu học phí cao theo cơ chế thị trường.",
        effect: { economy: 25, society: -15, knowledge: 5 },
        explanation: "Kinh tế tốt nhưng người nghèo bị loại khỏi giáo dục.",
      },
      {
        id: "D",
        text: "Đóng cửa bớt đại học.",
        effect: { economy: 0, society: -10, knowledge: -20 },
        explanation: "Tụt hậu nhân lực, tri thức sụt giảm.",
      },
    ],
  },
  {
    id: 7,
    scenario: "Doanh nghiệp nhà nước làm ăn thua lỗ.",
    options: [
      {
        id: "A",
        text: "Tiếp tục bơm tiền cứu trợ.",
        effect: { economy: -20, society: 5, knowledge: -5 },
        explanation: "Tạo phục thuộc, doanh nghiệp không tự cải thiện.",
      },
      {
        id: "B",
        text: "Cổ phần hóa, tái cơ cấu quản lý.",
        effect: { economy: 15, society: 5, knowledge: 10 },
        explanation: "Nâng cao hiệu quả sản xuất, doanh nghiệp tự chủ.",
      },
      {
        id: "C",
        text: "Bán hết cho nước ngoài.",
        effect: { economy: 20, society: -10, knowledge: -10 },
        explanation: "Mất quyền tự chủ kinh tế chiến lược.",
      },
      {
        id: "D",
        text: "Giải thể ngay lập tức, mặc kệ công nhân.",
        effect: { economy: 5, society: -25, knowledge: 0 },
        explanation: "Công nhân thất nghiệp, xã hội loạn.",
      },
    ],
  },
  {
    id: 8,
    scenario: "Văn hóa ngoại lai xâm nhập mạnh mẽ.",
    options: [
      {
        id: "A",
        text: "Cấm hoàn toàn phim ảnh nước ngoài.",
        effect: { economy: -10, society: -5, knowledge: -15 },
        explanation: "Đóng cửa nhưng hạn chế phát triển tri thức.",
      },
      {
        id: "B",
        text: "Giữ gìn bản sắc dân tộc đồng thời tiếp thu tinh hoa nhân loại.",
        effect: { economy: 5, society: 15, knowledge: 15 },
        explanation: "Hòa nhập nhưng không hòa tan, cân bằng giữa truyền thống và hiện đại.",
      },
      {
        id: "C",
        text: "Thả cửa, cái gì hay thì xem.",
        effect: { economy: 10, society: -10, knowledge: 0 },
        explanation: "Tự do nhưng mất bản sắc văn hóa dân tộc.",
      },
      {
        id: "D",
        text: "Bắt buộc xem kịch truyền thống mỗi tối.",
        effect: { economy: -5, society: -20, knowledge: 0 },
        explanation: "Cưỡng ép gây phản cảm, không hiệu quả.",
      },
    ],
  },
  {
    id: 9,
    scenario: "Ô nhiễm môi trường ở các khu công nghiệp.",
    options: [
      {
        id: "A",
        text: "Đóng cửa nhà máy để bảo vệ môi trường.",
        effect: { economy: -20, society: -5, knowledge: 5 },
        explanation: "Bảo vệ được môi trường nhưng công nhân thất nghiệp.",
      },
      {
        id: "B",
        text: "Yêu cầu lắp hệ thống xử lý thải, phạt nặng vi phạm.",
        effect: { economy: -5, society: 15, knowledge: 10 },
        explanation: "Cân bằng giữa phát triển kinh tế và bảo vệ môi trường.",
      },
      {
        id: "C",
        text: "Làm ngơ để doanh nghiệp phát triển.",
        effect: { economy: 15, society: -20, knowledge: -5 },
        explanation: "Kinh tế phát triển nhưng môi trường bị phá hủy, dân bệnh tật.",
      },
      {
        id: "D",
        text: "Xả thải ra biển đêm.",
        effect: { economy: 10, society: -30, knowledge: -10 },
        explanation: "Thâm hụt đạo đức, tạo nên thảm họa sinh thái.",
      },
    ],
  },
  {
    id: 10,
    scenario: "Tham nhũng vặt ở cơ quan công quyền.",
    options: [
      {
        id: "A",
        text: "Chấp nhận như một phần của văn hóa.",
        effect: { economy: -10, society: -30, knowledge: -10 },
        explanation: "Xã hội suy đồi, niềm tin vào chính phủ biến mất.",
      },
      {
        id: "B",
        text: "Chuyển đổi số, làm thủ tục hành chính online để giảm tiêu cực.",
        effect: { economy: 10, society: 20, knowledge: 20 },
        explanation: "Công nghệ giải quyết vấn đề, lịch sử, xã hội lành mạnh.",
      },
      {
        id: "C",
        text: "Tăng lương thật cao cho cán bộ.",
        effect: { economy: -15, society: 5, knowledge: 5 },
        explanation: "Giảm động cơ tham nhũng nhưng tốn kém.",
      },
      {
        id: "D",
        text: "Xử bắn hết tham nhũng vặt.",
        effect: { economy: 0, society: -10, knowledge: 0 },
        explanation: "Cực đoan, tạo khí hậu恐怖.",
      },
    ],
  },
  {
    id: 11,
    scenario: "Cách mạng 4.0: Tự động hóa giúp tăng năng suất nhưng khiến công nhân thất nghiệp. Bạn chọn gì?",
    options: [
      {
        id: "A",
        text: "Đẩy mạnh tự động hóa tối đa để tăng GDP.",
        effect: { economy: 30, society: -20, knowledge: 20 },
        explanation: "Kinh tế tăng vọt nhưng xã hội loạn vì thất nghiệp.",
      },
      {
        id: "B",
        text: "Tự động hóa có lộ trình, dùng tiền lãi đào tạo lại nghề cho công nhân.",
        effect: { economy: 10, society: 5, knowledge: 10 },
        explanation: "An toàn nhưng tăng trưởng chậm.",
      },
      {
        id: "C",
        text: "Hạn chế máy móc để giữ việc làm cho dân.",
        effect: { economy: -15, society: 10, knowledge: -15 },
        explanation: "Dân vui nhưng đất nước tụt hậu.",
      },
      {
        id: "D",
        text: "Thay thế hoàn toàn bằng robot, không quan tâm công nhân.",
        effect: { economy: 40, society: -50, knowledge: 30 },
        explanation: "Nguy cơ bạo loạn lật đổ.",
      },
    ],
  },
  {
    id: 12,
    scenario: "Một tập đoàn công nghệ lớn muốn đầu tư nhưng đòi miễn thuế 20 năm.",
    options: [
      {
        id: "A",
        text: "Đồng ý ngay. Cần công việc và chuyển giao công nghệ.",
        effect: { economy: 15, society: -5, knowledge: 20 },
        explanation: "Được công nghệ nhưng mất công bằng thuế.",
      },
      {
        id: "B",
        text: "Từ chối. Doanh nghiệp trong nước phải đóng thuế sao họ lại được miễn?",
        effect: { economy: -10, society: 15, knowledge: -5 },
        explanation: "Công bằng nhưng mất cơ hội đầu tư lớn.",
      },
      {
        id: "C",
        text: "Đàm phán giảm ưu đãi, chấp nhận họ có thể bỏ đi.",
        effect: { economy: 5, society: 5, knowledge: 5 },
        explanation: "Phương án trung dung, rủi ro thấp.",
      },
      {
        id: "D",
        text: "Đồng ý và cho thêm đất đai miễn phí.",
        effect: { economy: 20, society: -20, knowledge: 10 },
        explanation: "Ưu ái quá mức gây bất bình.",
      },
    ],
  },
  {
    id: 13,
    scenario: "Chảy máu chất xám: Nhân tài đòi lương 10.000$ (cao gấp 100 lần lương cơ bản) mới về nước.",
    options: [
      {
        id: "A",
        text: "Chấp nhận trả lương cao đặc biệt (Cơ chế đặc thù).",
        effect: { economy: -10, society: -15, knowledge: 40 },
        explanation: "Tri thức tăng vọt, nhưng gây bất mãn xã hội sâu sắc.",
      },
      {
        id: "B",
        text: "Kêu gọi lòng yêu nước, lương theo quy định.",
        effect: { economy: 0, society: 10, knowledge: -20 },
        explanation: "Không ai về, tri thức tụt dốc.",
      },
      {
        id: "C",
        text: "Trả lương cao vừa phải + thưởng theo kết quả.",
        effect: { economy: -5, society: -5, knowledge: 15 },
        explanation: "Cân bằng tạm thời.",
      },
      {
        id: "D",
        text: "Cấm họ làm việc cho nước ngoài.",
        effect: { economy: -10, society: -30, knowledge: -30 },
        explanation: "Vi phạm nhân quyền.",
      },
    ],
  },
  {
    id: 14,
    scenario: "Giá nhà đất tăng phi mã, người trẻ không mua nổi nhà.",
    options: [
      {
        id: "A",
        text: "Đánh thuế bất động sản cực nặng để giảm giá nhà.",
        effect: { economy: -25, society: 30, knowledge: 0 },
        explanation: "Dân vui nhưng thị trường đóng băng, kinh tế sụt giảm.",
      },
      {
        id: "B",
        text: "Để thị trường tự quyết định.",
        effect: { economy: 15, society: -25, knowledge: 0 },
        explanation: "Kinh tế sôi động nhưng bất ổn xã hội tăng.",
      },
      {
        id: "C",
        text: "Nhà nước xây nhà ở xã hội bán giá gốc, bù lỗ ngân sách.",
        effect: { economy: -15, society: 20, knowledge: 0 },
        explanation: "Tốn tiền ngân sách nhưng an dân.",
      },
      {
        id: "D",
        text: "Cấm người dân sở hữu quá 1 căn nhà.",
        effect: { economy: -20, society: 10, knowledge: -5 },
        explanation: "Can thiệp thô bạo.",
      },
    ],
  },
  {
    id: 15,
    scenario: "Khủng hoảng năng lượng. Cần điện cho sản xuất gấp.",
    options: [
      {
        id: "A",
        text: "Chạy hết công suất nhiệt điện than.",
        effect: { economy: 25, society: -20, knowledge: -10 },
        explanation: "Có điện rẻ ngay, nhưng ô nhiễm khiến dân bệnh tật.",
      },
      {
        id: "B",
        text: "Đầu tư điện hạt nhân.",
        effect: { economy: -30, society: -10, knowledge: 30 },
        explanation: "Tốn cực nhiều tiền và rủi ro, nhưng công nghệ cao.",
      },
      {
        id: "C",
        text: "Cắt điện luân phiên.",
        effect: { economy: -20, society: -20, knowledge: 0 },
        explanation: "Kinh tế đình trệ, dân chửi.",
      },
      {
        id: "D",
        text: "Nhập khẩu điện giá cao.",
        effect: { economy: -15, society: 0, knowledge: 0 },
        explanation: "Tốn tiền nhưng an toàn tạm thời.",
      },
    ],
  },
  {
    id: 16,
    scenario: "Mạng xã hội lan truyền tin giả (Fake News) gây hoang mang.",
    options: [
      {
        id: "A",
        text: "Siết chặt kiểm duyệt, bắt bớ người đăng.",
        effect: { economy: -5, society: 10, knowledge: -15 },
        explanation: "Đảm bảo trật tự nhưng không khí ngột ngạt.",
      },
      {
        id: "B",
        text: "Phạt tiền thật nặng các nền tảng mạng xã hội.",
        effect: { economy: 10, society: 5, knowledge: -5 },
        explanation: "Thu được tiền nhưng họ có thể rút khỏi thị trường.",
      },
      {
        id: "C",
        text: "Giáo dục kỹ năng số cho toàn dân.",
        effect: { economy: -10, society: 5, knowledge: 20 },
        explanation: "Tốn tiền và lâu dài, hiệu quả chậm.",
      },
      {
        id: "D",
        text: "Cắt internet.",
        effect: { economy: -40, society: -30, knowledge: -40 },
        explanation: "Tự sát.",
      },
    ],
  },
  {
    id: 17,
    scenario: "Đại dịch bùng phát. Lựa chọn chiến lược?",
    options: [
      {
        id: "A",
        text: "Phong tỏa toàn quốc (Zero Covid).",
        effect: { economy: -30, society: 20, knowledge: 0 },
        explanation: "Cứu được người nhưng kinh tế kiệt quệ.",
      },
      {
        id: "B",
        text: "Miễn dịch cộng đồng (Mở cửa hoàn toàn).",
        effect: { economy: 10, society: -40, knowledge: -10 },
        explanation: "Kinh tế sống nhưng nhiều người chết, xã hội hoảng loạn.",
      },
      {
        id: "C",
        text: "Mục tiêu kép: Vừa chống dịch vừa sản xuất linh hoạt.",
        effect: { economy: -5, society: 5, knowledge: 5 },
        explanation: "Khó thực hiện, hiệu quả trung bình.",
      },
      {
        id: "D",
        text: "Giấu dịch.",
        effect: { economy: 0, society: -50, knowledge: -20 },
        explanation: "Thảm họa.",
      },
    ],
  },
  {
    id: 18,
    scenario: "Người dân tộc thiểu số muốn giữ tập tục lạc hậu (tảo hôn, cúng bái chữa bệnh).",
    options: [
      {
        id: "A",
        text: "Cấm đoán, dùng biện pháp mạnh dẹp bỏ.",
        effect: { economy: 0, society: -20, knowledge: 10 },
        explanation: "Nâng cao tri thức nhưng gây xung đột sắc tộc.",
      },
      {
        id: "B",
        text: "Tôn trọng tuyệt đối, không can thiệp.",
        effect: { economy: -5, society: 10, knowledge: -20 },
        explanation: "Được lòng dân nhưng dân trí thấp mãi.",
      },
      {
        id: "C",
        text: "Kiên trì vận động, xây trường học, trạm y tế.",
        effect: { economy: -15, society: 10, knowledge: 15 },
        explanation: "Tốn kém tiền bạc nhưng bền vững.",
      },
      {
        id: "D",
        text: "Di dời họ về thành phố sống.",
        effect: { economy: -20, society: -30, knowledge: 0 },
        explanation: "Phá vỡ cấu trúc xã hội.",
      },
    ],
  },
  {
    id: 19,
    scenario: "Đầu tư nghiên cứu vũ trụ/không gian.",
    options: [
      {
        id: "A",
        text: "Dồn ngân sách lớn để phóng vệ tinh riêng.",
        effect: { economy: -30, society: -5, knowledge: 40 },
        explanation: "Tri thức và vị thế tăng vọt, nhưng dân đói.",
      },
      {
        id: "B",
        text: "Không làm, lo cơm áo gạo tiền trước.",
        effect: { economy: 10, society: 5, knowledge: -20 },
        explanation: "Kinh tế ổn nhưng tụt hậu công nghệ.",
      },
      {
        id: "C",
        text: "Hợp tác ké với nước ngoài.",
        effect: { economy: -5, society: 0, knowledge: 10 },
        explanation: "Giải pháp an toàn.",
      },
      {
        id: "D",
        text: "Mua công nghệ cũ về nghiên cứu lại.",
        effect: { economy: -10, society: -5, knowledge: 5 },
        explanation: "Lãng phí.",
      },
    ],
  },
  {
    id: 20,
    scenario: "Hệ thống phúc lợi xã hội (lương hưu) sắp vỡ quỹ do dân số già.",
    options: [
      {
        id: "A",
        text: "Tăng tuổi nghỉ hưu.",
        effect: { economy: 10, society: -20, knowledge: 0 },
        explanation: "Cứu được quỹ nhưng dân lao động phản đối kịch liệt.",
      },
      {
        id: "B",
        text: "Tăng mức đóng bảo hiểm xã hội của người trẻ.",
        effect: { economy: -5, society: -15, knowledge: 0 },
        explanation: "Gánh nặng cho thế hệ trẻ.",
      },
      {
        id: "C",
        text: "Cắt giảm lương hưu.",
        effect: { economy: 15, society: -30, knowledge: 0 },
        explanation: "Người già rơi vào cảnh nghèo đói.",
      },
      {
        id: "D",
        text: "Lấy ngân sách nhà nước bù lỗ.",
        effect: { economy: -20, society: 10, knowledge: 0 },
        explanation: "Thâm hụt ngân sách đầu tư phát triển.",
      },
    ],
  },
  {
    id: 21,
    scenario: "AI (Trí tuệ nhân tạo) phát triển vượt bậc, có nguy cơ vượt kiểm soát con người.",
    options: [
      {
        id: "A",
        text: "Cấm hoàn toàn nghiên cứu AI.",
        effect: { economy: -30, society: 10, knowledge: -40 },
        explanation: "Xã hội an tâm nhưng đất nước tụt về thời đồ đá.",
      },
      {
        id: "B",
        text: "Phát triển AI không giới hạn để thống trị thế giới.",
        effect: { economy: 40, society: -40, knowledge: 40 },
        explanation: "Kinh tế & Tri thức đỉnh cao, nhưng Xã hội hoảng loạn.",
      },
      {
        id: "C",
        text: "Kiểm soát chặt chẽ đạo đức AI.",
        effect: { economy: -10, society: 5, knowledge: 5 },
        explanation: "Kìm hãm tốc độ phát triển nhưng an toàn.",
      },
      {
        id: "D",
        text: "Chỉ dùng AI cho quân sự.",
        effect: { economy: -20, society: -20, knowledge: 20 },
        explanation: "Chạy đua vũ trang tốn kém.",
      },
    ],
  },
  {
    id: 22,
    scenario: "Biến đổi khí hậu gây ngập lụt các thành phố lớn.",
    options: [
      {
        id: "A",
        text: "Xây đê biển khổng lồ bao quanh thành phố.",
        effect: { economy: -40, society: 20, knowledge: 10 },
        explanation: "An toàn cho dân nhưng ngân sách cạn kiệt.",
      },
      {
        id: "B",
        text: "Di dời thủ đô lên vùng núi.",
        effect: { economy: -30, society: -30, knowledge: 0 },
        explanation: "Xáo trộn toàn bộ xã hội và kinh tế.",
      },
      {
        id: "C",
        text: "Sống chung với lũ, mỗi nhà tự sắm thuyền.",
        effect: { economy: -10, society: -40, knowledge: 0 },
        explanation: "Kinh tế đỡ tốn nhưng dân khổ sở vô cùng.",
      },
      {
        id: "D",
        text: "Kêu gọi quốc tế viện trợ.",
        effect: { economy: 10, society: -10, knowledge: -10 },
        explanation: "Mất tự chủ.",
      },
    ],
  },
  {
    id: 23,
    scenario: "Thế hệ Gen Z không muốn sinh con (Ngại đẻ).",
    options: [
      {
        id: "A",
        text: "Thưởng tiền thật lớn cho ai đẻ con.",
        effect: { economy: -20, society: 10, knowledge: 0 },
        explanation: "Tốn tiền nhưng hiệu quả chưa chắc cao.",
      },
      {
        id: "B",
        text: "Đánh thuế người độc thân.",
        effect: { economy: 10, society: -30, knowledge: 0 },
        explanation: "Xâm phạm quyền tự do, gây phẫn nộ.",
      },
      {
        id: "C",
        text: "Nhập khẩu lao động nước ngoài.",
        effect: { economy: 15, society: -20, knowledge: -5 },
        explanation: "Kinh tế tốt nhưng xung đột văn hóa xã hội.",
      },
      {
        id: "D",
        text: "Chấp nhận dân số già.",
        effect: { economy: -25, society: 5, knowledge: -10 },
        explanation: "Thiếu lao động, suy thoái kinh tế dài hạn.",
      },
    ],
  },
  {
    id: 24,
    scenario: "Khủng hoảng tài chính toàn cầu ập đến.",
    options: [
      {
        id: "A",
        text: "Bơm tiền cứu thị trường.",
        effect: { economy: -20, society: 10, knowledge: 0 },
        explanation: "Lạm phát tăng, nhưng giữ được ổn định xã hội.",
      },
      {
        id: "B",
        text: "Thắt lưng buộc bụng, cắt giảm chi tiêu công.",
        effect: { economy: 10, society: -30, knowledge: -20 },
        explanation: "Kinh tế vĩ mô ổn, nhưng dân nghèo đói.",
      },
      {
        id: "C",
        text: "Đóng cửa nền kinh tế.",
        effect: { economy: -30, society: -10, knowledge: -20 },
        explanation: "Tự sát kinh tế.",
      },
      {
        id: "D",
        text: "Bán tài sản quốc gia.",
        effect: { economy: 20, society: -20, knowledge: -20 },
        explanation: "Bán tương lai để cứu hiện tại.",
      },
    ],
  },
  {
    id: 25,
    scenario: "Xung đột biên giới nổ ra.",
    options: [
      {
        id: "A",
        text: "Chiến tranh tổng lực bảo vệ chủ quyền.",
        effect: { economy: -50, society: 20, knowledge: -20 },
        explanation: "Kinh tế sụp đổ vì chiến phí, nhưng lòng dân tăng cao.",
      },
      {
        id: "B",
        text: "Đàm phán hòa bình, chấp nhận nhượng bộ một chút.",
        effect: { economy: 0, society: -30, knowledge: 0 },
        explanation: "Giữ được kinh tế nhưng mất lòng dân.",
      },
      {
        id: "C",
        text: "Mua vũ khí hiện đại để răn đe.",
        effect: { economy: -30, society: 10, knowledge: 10 },
        explanation: "Tốn kém.",
      },
      {
        id: "D",
        text: "Kêu gọi đồng minh bảo vệ.",
        effect: { economy: -10, society: -10, knowledge: -10 },
        explanation: "Mất thế tự chủ.",
      },
    ],
  },
  {
    id: 26,
    scenario: "Công nghệ chỉnh sửa gen người (Super Human) ra đời.",
    options: [
      {
        id: "A",
        text: "Cho phép giới siêu giàu nâng cấp cơ thể/trí tuệ.",
        effect: { economy: 30, society: -50, knowledge: 40 },
        explanation: "Tạo ra giống loài ưu việt, nhưng bất bình đẳng sinh học.",
      },
      {
        id: "B",
        text: "Cấm hoàn toàn vì đạo đức.",
        effect: { economy: -10, society: 10, knowledge: -30 },
        explanation: "Kìm hãm khoa học.",
      },
      {
        id: "C",
        text: "Nhà nước độc quyền công nghệ này cho quân đội.",
        effect: { economy: -20, society: -20, knowledge: 20 },
        explanation: "Nguy hiểm.",
      },
      {
        id: "D",
        text: "Phổ cập miễn phí cho toàn dân.",
        effect: { economy: -50, society: 30, knowledge: 50 },
        explanation: "Vỡ nợ quốc gia ngay lập tức.",
      },
    ],
  },
  {
    id: 27,
    scenario: "Nền kinh tế chia sẻ (Grab/Uber hóa) khiến lao động truyền thống biểu tình.",
    options: [
      {
        id: "A",
        text: "Cấm các ứng dụng công nghệ.",
        effect: { economy: -20, society: 10, knowledge: -20 },
        explanation: "Bảo vệ xe ôm truyền thống nhưng đi lùi thời đại.",
      },
      {
        id: "B",
        text: "Thả nổi thị trường.",
        effect: { economy: 20, society: -20, knowledge: 10 },
        explanation: "Kinh tế tăng, tiện lợi, nhưng xung đột xã hội cao.",
      },
      {
        id: "C",
        text: "Thu thuế cao công nghệ để trợ cấp truyền thống.",
        effect: { economy: -5, society: 5, knowledge: 0 },
        explanation: "Giải pháp hòa hoãn.",
      },
      {
        id: "D",
        text: "Bắt buộc công ty công nghệ đóng bảo hiểm cho tài xế.",
        effect: { economy: -10, society: 15, knowledge: 5 },
        explanation: "Doanh nghiệp khó khăn hơn, nhưng xã hội tốt hơn.",
      },
    ],
  },
  {
    id: 28,
    scenario: "Dư luận đòi bỏ án tử hình vì nhân quyền.",
    options: [
      {
        id: "A",
        text: "Bỏ án tử hình.",
        effect: { economy: -10, society: -20, knowledge: 10 },
        explanation: "Văn minh hơn, nhưng tội phạm lộng hành.",
      },
      {
        id: "B",
        text: "Giữ nguyên án tử hình, xử lý nghiêm.",
        effect: { economy: 0, society: 10, knowledge: -10 },
        explanation: "Dân yên tâm nhưng bị quốc tế chỉ trích nhân quyền.",
      },
      {
        id: "C",
        text: "Tăng thêm các tội bị tử hình (tham nhũng, ma túy).",
        effect: { economy: 5, society: 5, knowledge: -20 },
        explanation: "Răn đe tốt nhưng hà khắc.",
      },
      {
        id: "D",
        text: "Trưng cầu dân ý (tốn kém).",
        effect: { economy: -10, society: 5, knowledge: 5 },
        explanation: "Tốn tiền tổ chức.",
      },
    ],
  },
  {
    id: 29,
    scenario: "Lựa chọn cuối cùng: Hy sinh thế hệ này để thế hệ sau sung sướng?",
    options: [
      {
        id: "A",
        text: "Thắt lưng buộc bụng tối đa, dồn toàn lực đầu tư tương lai.",
        effect: { economy: 30, society: -40, knowledge: 40 },
        explanation: "Tương lai rực rỡ nhưng hiện tại dân khổ cực.",
      },
      {
        id: "B",
        text: "Vay nợ để dân hiện tại hưởng thụ, con cháu trả sau.",
        effect: { economy: -30, society: 40, knowledge: -10 },
        explanation: "Dân sướng, nhưng vỡ nợ.",
      },
      {
        id: "C",
        text: "Phát triển từ từ, chậm nhưng chắc.",
        effect: { economy: 5, society: 5, knowledge: 5 },
        explanation: "Phương án an toàn nhất nếu các chỉ số đang thấp.",
      },
      {
        id: "D",
        text: "Bán tài nguyên chia tiền cho dân tiêu xài.",
        effect: { economy: 10, society: 10, knowledge: -50 },
        explanation: "Ăn vào vốn, đất nước lụi tàn tri thức.",
      },
    ],
  },
  {
    id: 30,
    scenario: "PHÁN QUYẾT: Bạn muốn xây dựng mô hình xã hội nào?",
    options: [
      {
        id: "A",
        text: "Siêu cường Kinh tế (Chấp nhận bất công).",
        effect: { economy: 50, society: -30, knowledge: 10 },
        explanation: "Canh bạc cuối cùng: Thắng nếu Kinh tế đang thấp, Thua nếu Xã hội đang yếu.",
      },
      {
        id: "B",
        text: "Thiên đường Xã hội (Chấp nhận nghèo).",
        effect: { economy: -30, society: 50, knowledge: 10 },
        explanation: "Thắng nếu Xã hội thấp, Thua nếu Kinh tế yếu.",
      },
      {
        id: "C",
        text: "Cường quốc Công nghệ (Chấp nhận rủi ro).",
        effect: { economy: 10, society: -30, knowledge: 50 },
        explanation: "Thắng nếu Tri thức thấp.",
      },
      {
        id: "D",
        text: "Hài hòa XHCN (Cân bằng mọi mặt).",
        effect: { economy: 10, society: 10, knowledge: 10 },
        explanation: "Lựa chọn của nhà lãnh đạo tài ba.",
      },
    ],
  },
]
