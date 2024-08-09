import { Hourglass, ListChecks, Megaphone, ShieldCheck } from 'lucide-react'

export const apiEndpoint = 'https://dkmh.hcmuaf.edu.vn/api'

export const navLinks = [
    {
        title: 'Trang chủ',
        href: 'home',
    },
    {
        title: 'Tính năng',
        href: 'features',
    },
    {
        title: 'Tổng quan',
        href: 'overview',
    },
    {
        title: 'Giá',
        href: 'pricing',
    },
    {
        title: 'Công cụ',
        href: 'tool',
    },
]

export const pricingItems: PricingItem[] = [
    {
        title: 'Vip Code 1',
        subtitle: 'Sinh viên tự sử dụng công cụ trong 1 ngày',
        price: 50000,
        features: [
            'Bạn phải tự đăng ký môn học',
            'Không giới hạn số lượng học phần',
            'Hỗ trợ 24/7',
            'Tỉ lệ đăng ký thành công 90%',
        ],
    },
    {
        title: 'Vip Code 3',
        subtitle: 'Sinh viên tự sử dụng công cụ trong 3 ngày',
        price: 80000,
        features: [
            'Bạn phải tự đăng ký môn học',
            'Không giới hạn số lượng học phần',
            'Hỗ trợ 24/7',
            'Tỉ lệ đăng ký thành công 90%',
        ],
    },
    {
        title: 'Vip Code 7',
        subtitle: 'Sinh viên tự sử dụng công cụ trong 7 ngày',
        price: 100000,
        features: [
            'Bạn phải tự đăng ký môn học',
            'Không giới hạn số lượng học phần',
            'Hỗ trợ 24/7',
            'Tỉ lệ đăng ký thành công 90%',
        ],
    },
    {
        title: 'Trọn gói 5 môn',
        subtitle: 'Dành cho những sinh viên có nhu cầu hỗ trợ đăng ký môn học',
        price: 200000,
        features: [
            'Chúng tôi sẽ đăng ký môn học cho bạn',
            'Không chịu trách nhiệm nếu môn học bị hủy, trùng lịch',
            'Hoàn tiền nếu không đăng ký được',
            'Hỗ trợ 24/7',
            'Tỉ lệ đăng ký thành công 99%',
        ],
    },
    {
        title: 'Trọn gói 7 môn',
        subtitle: 'Dành cho những sinh viên có nhu cầu hỗ trợ đăng ký môn học',
        price: 260000,
        features: [
            'Chúng tôi sẽ đăng ký môn học cho bạn',
            'Không chịu trách nhiệm nếu môn học bị hủy, trùng lịch',
            'Hoàn tiền nếu không đăng ký được trên 3 môn',
            'Hỗ trợ 24/7',
            'Tỉ lệ đăng ký thành công 99%',
        ],
    },
    {
        title: 'Trọn gói 10 môn',
        subtitle: 'Dành cho những sinh viên có nhu cầu hỗ trợ đăng ký môn học',
        price: 300000,
        features: [
            'Chúng tôi sẽ đăng ký môn học cho bạn',
            'Không chịu trách nhiệm nếu môn học bị hủy, trùng lịch',
            'Hoàn tiền nếu không đăng ký được trên 5 môn',
            'Hỗ trợ 24/7',
            'Tỉ lệ đăng ký thành công 95%',
        ],
    },
]

export const featureItems: FeatureItem[] = [
    {
        title: 'Đăng ký đồng thời',
        icon: <ListChecks />,
        description: 'Khi đăng ký môn học truyền thống, bạn chỉ có thể đăng ký một môn học một lần. Với công cụ của' +
            ' chúng tôi, bạn có thể đăng ký nhiều môn học cùng lúc.',
    },
    {
        title: 'Bảo mật',
        icon: <ShieldCheck />,
        description: 'Thông tin của bạn được bảo mật tuyệt đối. Tên và mã số sinh viên của bạn sẽ được thu thập để' +
            ' thống kê số liệu.',
    },
    {
        title: 'Hỗ trợ 24/7',
        icon: <Megaphone />,
        description: 'Chúng tôi luôn sẵn sàng hỗ trợ bạn trong quá trình sử dụng công cụ. Bạn có thể liên hệ với chúng' +
            ' tôi qua email hoặc Facebook.',
    },
    {
        title: 'Tiết kiệm thời gian',
        icon: <Hourglass />,
        description: 'Bạn sẽ không còn phải mất thời gian đăng ký môn học nữa. Công cụ của chúng tôi sẽ giúp bạn đăng ký' +
            ' môn học một cách nhanh chóng và hiệu quả. Chỉ cần điền thông tin 1 lần là bạn đã có thể sử dụng công cụ.',
    }
]
