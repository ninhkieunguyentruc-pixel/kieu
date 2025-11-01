import type { Question } from './types';

export const QUESTIONS_PER_BATCH = 10;

export const QUIZ_DATA: Question[] = [
  // Cụm 1
  {
    id: 1,
    question: "I'm _____ of taking photos.",
    options: { A: "interested", B: "fond", C: "keen", D: "into" },
    correctAnswer: "B",
    translation: "Tôi thích chụp ảnh."
  },
  {
    id: 2,
    question: "Mai is _____ in history.",
    options: { A: "interesting", B: "fond", C: "interested", D: "about" },
    correctAnswer: "C",
    translation: "Mai quan tâm đến lịch sử."
  },
  {
    id: 3,
    question: "My sister is _____ on cooking.",
    options: { A: "into", B: "at", C: "keen", D: "for" },
    correctAnswer: "C",
    translation: "Chị gái tôi thích nấu ăn."
  },
  {
    id: 4,
    question: "My brother spends lots of time surfing the net, but I'm not _____ it.",
    options: { A: "in", B: "on", C: "into", D: "of" },
    correctAnswer: "C",
    translation: "Anh trai tôi dành nhiều thời gian lướt mạng, nhưng tôi không hứng thú với điều đó."
  },
  // Cụm 2
  {
    id: 5,
    question: "I'm not crazy _____ doing DIY.",
    options: { A: "to", B: "about", C: "at", D: "among" },
    correctAnswer: "B",
    translation: "Tôi không mê làm đồ tự chế."
  },
  {
    id: 6,
    question: "Mark is _______ about sport.",
    options: { A: "surfs", B: "crazy", C: "doing", D: "fond" },
    correctAnswer: "B",
    translation: "Mark rất mê thể thao."
  },
  {
    id: 7,
    question: "Are you keen ________ gardening or going shopping?",
    options: { A: "on", B: "about", C: "to", D: "in" },
    correctAnswer: "A",
    translation: "Bạn có thích làm vườn hay đi mua sắm không?"
  },
  {
    id: 8,
    question: "Many girls are interested in ________ DIY.",
    options: { A: "cooking", B: "surfs", C: "doing", D: "into" },
    correctAnswer: "C",
    translation: "Nhiều cô gái quan tâm đến việc làm đồ tự chế."
  },
  {
    id: 11,
    question: "What does your brother do in his free time? - He usually ________ the net.",
    options: { A: "surfs", B: "cooking", C: "about", D: "into" },
    correctAnswer: "A",
    translation: "Anh ấy thường lướt mạng."
  },
  {
    id: 12,
    question: "Teenagers need encouragement from their parents, ______ not all parents are willing to encourage their children.",
    options: { A: "for", B: "and", C: "but", D: "so" },
    correctAnswer: "C",
    translation: "Thanh thiếu niên cần sự động viên từ cha mẹ, nhưng không phải tất cả cha mẹ đều sẵn lòng khuyến khích con cái họ."
  },
  {
    id: 13,
    question: "Many girls worry about their appearance, ______ they often look at themselves in a mirror.",
    options: { A: "but", B: "so", C: "or", D: "for" },
    correctAnswer: "B",
    translation: "Nhiều cô gái lo lắng về ngoại hình của mình, vì vậy họ thường soi mình trong gương."
  },
  {
    id: 14,
    question: "Teenagers should learn to mix with their classmates, ______ they can try to get on with their siblings.",
    options: { A: "so", B: "for", C: "or", D: "yet" },
    correctAnswer: "A",
    translation: "Thanh thiếu niên nên học cách hòa đồng với bạn học, vì vậy họ có thể cố gắng hòa thuận với anh chị em của mình."
  },
  {
    id: 15,
    question: "Social media helps teens connect with others; ______, they also cause teens to feel lonely.",
    options: { A: "however", B: "therefore", C: "otherwise", D: "although" },
    correctAnswer: "A",
    translation: "Mạng xã hội giúp thanh thiếu niên kết nối với người khác; tuy nhiên, chúng cũng khiến họ cảm thấy cô đơn."
  },
  {
    id: 16,
    question: "They spend a lot of time surfing the net; _______________, they have little time to read books.",
    options: { A: "however", B: "therefore", C: "although", D: "otherwise" },
    correctAnswer: "B",
    translation: "Họ dành nhiều thời gian lướt mạng; do đó, họ có ít thời gian để đọc sách."
  },
  {
    id: 17,
    question: "Parents should give teens some freedom, _____ they should also set limits.",
    options: { A: "for", B: "so", C: "but", D: "and" },
    correctAnswer: "C",
    translation: "Cha mẹ nên cho thanh thiếu niên một chút tự do, nhưng họ cũng nên đặt ra giới hạn."
  },
  {
    id: 18,
    question: "We don't cheat on exams, ______ it is a wrong thing to do.",
    options: { A: "or", B: "for", C: "and", D: "but" },
    correctAnswer: "B",
    translation: "Chúng tôi không gian lận trong các kỳ thi, vì đó là một việc làm sai trái."
  },
  {
    id: 19,
    question: "Lan wants to join the school music club; _____ she can't sing or play any instruments.",
    options: { A: "however", B: "otherwise", C: "therefore", D: "as a result" },
    correctAnswer: "A",
    translation: "Lan muốn tham gia câu lạc bộ âm nhạc của trường; tuy nhiên cô ấy không thể hát hay chơi bất kỳ loại nhạc cụ nào."
  },
  {
    id: 20,
    question: "Schoolwork causes teens a lot of pressure, _____ they also feel pressure from their parents.",
    options: { A: "and", B: "but", C: "or", D: "for" },
    correctAnswer: "A",
    translation: "Việc học ở trường gây ra nhiều áp lực cho thanh thiếu niên, và họ cũng cảm thấy áp lực từ cha mẹ."
  },
  {
    id: 21,
    question: "She wanted to prepare for the exam; _____ she turned off her mobile phone.",
    options: { A: "however", B: "otherwise", C: "therefore", D: "as a result" },
    correctAnswer: "C",
    translation: "Cô ấy muốn chuẩn bị cho kỳ thi; do đó cô ấy đã tắt điện thoại di động của mình."
  },
  {
    id: 22,
    question: "I _________ the school website and found pictures of school activities.",
    options: { A: "uploaded", B: "browsed", C: "connected", D: "checked" },
    correctAnswer: "B",
    translation: "Tôi đã duyệt trang web của trường và tìm thấy hình ảnh các hoạt động của trường."
  },
  {
    id: 23,
    question: "Our teacher ____ a video of our last meeting in our forum for everyone to see.",
    options: { A: "uploaded", B: "browsed", C: "logs on", D: "checked" },
    correctAnswer: "A",
    translation: "Giáo viên của chúng tôi đã tải lên một video về cuộc họp cuối cùng của chúng tôi trên diễn đàn cho mọi người cùng xem."
  },
  {
    id: 24,
    question: "She _____ with some old friends at the English club.",
    options: { A: "checked", B: "browsed", C: "connected", D: "notifications" },
    correctAnswer: "C",
    translation: "Cô ấy đã kết nối với một số người bạn cũ tại câu lạc bộ tiếng Anh."
  },
  {
    id: 25,
    question: "Tom _____ the notifications and saw some new posts.",
    options: { A: "uploaded", B: "browsed", C: "connected", D: "checked" },
    correctAnswer: "D",
    translation: "Tom đã kiểm tra các thông báo và thấy một số bài đăng mới."
  },
  {
    id: 26,
    question: "Mi often _____ to her Instagram account to chat with her friends.",
    options: { A: "logs on", B: "browsed", C: "website", D: "checked" },
    correctAnswer: "A",
    translation: "Mi thường đăng nhập vào tài khoản Instagram của mình để trò chuyện với bạn bè."
  },
  {
    id: 27,
    question: "Mono danced ________ than Mr Buong, my teacher.",
    options: { A: "beautiful", B: "more beautiful", C: "beautifuler", D: "more beautifully" },
    correctAnswer: "D",
    translation: "Mono đã nhảy đẹp hơn thầy Buong, giáo viên của tôi."
  },
  {
    id: 28,
    question: "She felt tired. __________, she had to finish her homework.",
    options: { A: "However", B: "Therefore", C: "So", D: "Although" },
    correctAnswer: "A",
    translation: "Cô ấy cảm thấy mệt. Tuy nhiên, cô ấy phải hoàn thành bài tập về nhà."
  },
  {
    id: 29,
    question: "If the weather gets ________ tomorrow, we won’t go to the beach.",
    options: { A: "worse", B: "nicer", C: "more bad", D: "better" },
    correctAnswer: "A",
    translation: "Nếu thời tiết ngày mai trở nên tệ hơn, chúng ta sẽ không đi biển."
  },
  {
    id: 30,
    question: "A: Would you like to go to the cinema with me?\nB: _____________________",
    options: { A: "Yes, I watch films every day.", B: "Yes, I don't like it.", C: "I'd love to. Thanks.", D: "We can go there together." },
    correctAnswer: "C",
    translation: "Tớ rất thích. Cảm ơn nhé."
  },
  {
    id: 31,
    question: "A: Do you fancy going out for a drink?\nB: _____________________",
    options: { A: "I usually drink tea.", B: "Sure, thanks.", C: "Why are you asking?", D: "No, I prefer coffee." },
    correctAnswer: "B",
    translation: "Chắc chắn rồi, cảm ơn."
  },
  {
    id: 32,
    question: "A: Would you like to come to my house this afternoon?\nB: _____________________",
    options: { A: "That's very kind of you. Thanks.", B: "No, I can go there myself.", C: "Yes, I like staying at home.", D: "I think I can." },
    correctAnswer: "A",
    translation: "Bạn thật tốt bụng. Cảm ơn nhé."
  },
  {
    id: 33,
    question: "A: What leisure activities do you usually do with your mum?\nB: _____________________",
    options: { A: "She enjoys doing yoga.", B: "She goes to work at 7 a.m.", C: "She watches TV in her leisure time.", D: "We cook, do DIY, and cycle together." },
    correctAnswer: "D",
    translation: "Chúng tôi cùng nhau nấu ăn, làm đồ tự chế và đạp xe."
  },
  {
    id: 34,
    question: "A: How do you feel when you spend time with your mum?\nB: _____________________",
    options: { A: "Yes, I'd love to.", B: "I feel very happy.", C: "I like it, too.", D: "I love cooking with her." },
    correctAnswer: "B",
    translation: "Tôi cảm thấy rất vui."
  },
  {
    id: 35,
    question: "Tom: How about playing a game of chess?\nMai: ______. ",
    options: { A: "No, that's a waste of time.", B: "I'd love to. But I have to finish my homework first.", C: "Chess is interesting to play.", D: "I'm sorry. Don't ask me to do that." },
    correctAnswer: "B",
    translation: "Tớ rất thích. Nhưng tớ phải làm xong bài tập về nhà trước đã."
  },
  {
    id: 36,
    question: "Mai: ______?\nAnn: Yes, certainly.",
    options: { A: "Can I join you in this game", B: "Will I join you in this game", C: "Shall you join us in this game", D: "Should you join us in this game" },
    correctAnswer: "A",
    translation: "Tớ có thể tham gia trò chơi này với bạn không?"
  },
  {
    id: 37,
    question: "Nick: Could you tell me how I can deal with a bully?\nMi: ______. ",
    options: { A: "That's very kind of you. Thanks.", B: "Who's he? I don't know him.", C: "You should talk to your parents about him.", D: "You shouldn't talk to your parents about him." },
    correctAnswer: "C",
    translation: "Bạn nên nói chuyện với bố mẹ về cậu ta."
  },
  {
    id: 38,
    question: "Teacher: Would you like to discuss the causes of your stress in our forum?\nStudent: ______. ",
    options: { A: "No, I wouldn't.", B: "That's a good idea.", C: "Yes, I would join the forum.", D: "That's very kind of you." },
    correctAnswer: "B",
    translation: "Đó là một ý kiến hay ạ."
  },
  {
    id: 39,
    question: "Minh: ______?\nTom: Certainly. Go past this building, then turn left. It's right in front of you there.",
    options: { A: "Would you show me the way to the library, please", B: "Could you show me the way to the library, please", C: "Should you show me the way to the library, please", D: "May you show me the way to the library, please" },
    correctAnswer: "B",
    translation: "Bạn có thể chỉ cho tôi đường đến thư viện được không?"
  },
  {
    id: 40,
    question: "City people seem to react quicklier / more quickly to changes than countryside people.",
    options: { A: "quicklier", B: "more quickly", C: "quicker", D: "quickly" },
    correctAnswer: "B",
    translation: "Người thành phố dường như phản ứng nhanh hơn với những thay đổi so với người nông thôn."
  },
  {
    id: 41,
    question: "She came to the party later / more lately than her friends.",
    options: { A: "later", B: "more lately", C: "lately", D: "late" },
    correctAnswer: "A",
    translation: "Cô ấy đến bữa tiệc muộn hơn bạn bè của mình."
  },
  {
    id: 42,
    question: "Does a computer work at calculus more fast / faster than a human being?",
    options: { A: "more fast", B: "faster", C: "fastly", D: "fast" },
    correctAnswer: "B",
    translation: "Máy tính có tính toán nhanh hơn con người không?"
  },
  {
    id: 43,
    question: "Nga writes English essays better / more well than Mai.",
    options: { A: "better", B: "more well", C: "well", D: "good" },
    correctAnswer: "A",
    translation: "Nga viết luận tiếng Anh tốt hơn Mai."
  },
  {
    id: 44,
    question: "Nick can jump higher / more high than Mike.",
    options: { A: "higher", B: "more high", C: "high", D: "highly" },
    correctAnswer: "A",
    translation: "Nick có thể nhảy cao hơn Mike."
  },
  {
    id: 45,
    question: "Today it’s raining more heavily / heavilier than it was yesterday.",
    options: { A: "more heavily", B: "heavilier", C: "heavy", D: "heavier" },
    correctAnswer: "A",
    translation: "Hôm nay trời mưa to hơn hôm qua."
  },
  {
    id: 46,
    question: "Juice contains more / many vitamins than coke.",
    options: { A: "more", B: "many", C: "much", D: "lots" },
    correctAnswer: "A",
    translation: "Nước ép chứa nhiều vitamin hơn nước ngọt."
  },
  {
    id: 47,
    question: "The farmers in my village work hard / harder than the ones here.",
    options: { A: "harder", B: "hard", C: "more hard", D: "hardest" },
    correctAnswer: "A",
    translation: "Nông dân ở làng tôi làm việc chăm chỉ hơn những người ở đây."
  },
  {
    id: 48,
    question: "People in rural areas talk optimistically / more optimistically than city people.",
    options: { A: "more optimistically", B: "optimistically", C: "optimistic", D: "more optimistic" },
    correctAnswer: "A",
    translation: "Người ở nông thôn nói chuyện lạc quan hơn người thành phố."
  },
  {
    id: 49,
    question: "Ms. Sarah dances more beautifully / beautifully than Ms. Susan.",
    options: { A: "more beautifully", B: "beautifully", C: "most beautifully", D: "beautiful" },
    correctAnswer: "A",
    translation: "Cô Sarah nhảy đẹp hơn cô Susan."
  },
  {
    id: 50,
    question: "Nam was a good student. But he started using a smartphone and spending too much time on (1) _like Facebook and TikTok.",
    options: { A: "forum", B: "social media", C: "website", D: "notifications" },
    correctAnswer: "B",
    translation: "Nam từng là một học sinh giỏi. Nhưng cậu ấy bắt đầu dùng điện thoại thông minh và dành quá nhiều thời gian cho mạng xã hội như Facebook và TikTok."
  },
  {
    id: 51,
    question: "He also liked joining in chit-chat and game (2) _ for teens.",
    options: { A: "notifications", B: "posts", C: "forums", D: "videos" },
    correctAnswer: "C",
    translation: "Cậu ấy cũng thích tham gia các diễn đàn trò chuyện và game dành cho thanh thiếu niên."
  },
  {
    id: 52,
    question: "He spent a lot of time (3) __notifications.",
    options: { A: "checking", B: "posting", C: "uploading", D: "browsing" },
    correctAnswer: "A",
    translation: "Cậu ấy dành nhiều thời gian để kiểm tra thông báo."
  },
  {
    id: 53,
    question: "He even neglected his schoolwork, and stopped (4) __with his classmates, friends, and family members.",
    options: { A: "browsing", B: "logging on", C: "communicating", D: "coaching" },
    correctAnswer: "C",
    translation: "Cậu ấy thậm chí còn bỏ bê việc học và ngừng giao tiếp với bạn cùng lớp, bạn bè và các thành viên trong gia đình."
  },
  {
    id: 54,
    question: "One day Nam saw a video clip about a boy who was addicted to games, and had no friends, so when the boy was feeling down, he (5) ___others.",
    options: { A: "bullied", B: "connected", C: "helped", D: "joined" },
    correctAnswer: "A",
    translation: "Một ngày nọ, Nam xem một đoạn video về một cậu bé nghiện game và không có bạn bè, vì vậy khi cậu bé cảm thấy buồn, cậu đã bắt nạt người khác."
  },
  {
    id: 55,
    question: "It (1) _______ important to have a hobby.",
    options: { A: "have", B: "do", C: "are", D: "is" },
    correctAnswer: "D",
    translation: "Có một sở thích là điều quan trọng."
  },
  {
    id: 56,
    question: "It will give you a pleasure (2) _______ help you relax.",
    options: { A: "and", B: "but", C: "or", D: "so" },
    correctAnswer: "A",
    translation: "Nó sẽ mang lại cho bạn niềm vui và giúp bạn thư giãn."
  },
  {
    id: 57,
    question: "They (3) ____ a lot of trees and vegetables.",
    options: { A: "grows", B: "to grow", C: "growing", D: "grow" },
    correctAnswer: "D",
    translation: "Họ trồng rất nhiều cây và rau."
  },
  {
    id: 58,
    question: "If you like (4) ____ stamps, you can join a stamp club.",
    options: { A: "gardening", B: "playing", C: "selling", D: "collecting" },
    correctAnswer: "D",
    translation: "Nếu bạn thích sưu tập tem, bạn có thể tham gia câu lạc bộ tem."
  },
  {
    id: 59,
    question: "You can give your products to your friends (5) ____ gifts.",
    options: { A: "as", B: "for", C: "in", D: "with" },
    correctAnswer: "A",
    translation: "Bạn có thể tặng sản phẩm của mình cho bạn bè như những món quà."
  },
  {
    id: 60,
    question: "The writer’s hobbies are _______.",
    options: { A: "listening to music and playing games", B: "playing games and watching TV", C: "watching TV and listening to music", D: "reading books and playing games" },
    correctAnswer: "C",
    translation: "Sở thích của tác giả là xem TV và nghe nhạc."
  },
  {
    id: 61,
    question: "The writer often listens to his favorite songs from _______.",
    options: { A: "a cassette recorder", B: "a laptop", C: "a mobile phone", D: "a computer" },
    correctAnswer: "A",
    translation: "Tác giả thường nghe những bài hát yêu thích của mình từ máy ghi âm cassette."
  },
  {
    id: 62,
    question: "What does he usually do at weekends?",
    options: { A: "listens with friends", B: "stays at home", C: "listens at music shops", D: "goes downtown to buy CDs" },
    correctAnswer: "D",
    translation: "Anh ấy thường làm gì vào cuối tuần? - Đi vào trung tâm thành phố để mua đĩa CD."
  },
  {
    id: 63,
    question: "Why does he enjoy the programme “The World Here and There”?",
    options: { A: "Because he can see singers.", B: "Because it widens his knowledge.", C: "Because it contains music.", D: "Because he prefers Paul McCartney." },
    correctAnswer: "B",
    translation: "Tại sao anh ấy thích chương trình “Thế giới đây đó”? - Bởi vì nó mở rộng kiến thức của anh ấy."
  },
  {
    id: 64,
    question: "What is the main idea of the passage about social networking?",
    options: { A: "Parents should use social networks more.", B: "Students are using social networks too much.", C: "Social networking harms face-to-face communication.", D: "Virtual life is easier than real life." },
    correctAnswer: "C",
    translation: "Ý chính của đoạn văn về mạng xã hội là gì? - Mạng xã hội gây hại cho giao tiếp trực diện."
  },
  {
    id: 65,
    question: "What do most teenagers think about chatting on the Internet?",
    options: { A: "Easier than talking in person.", B: "Harder than talking in person.", C: "Funnier than real talk.", D: "More boring than real talk." },
    correctAnswer: "A",
    translation: "Hầu hết thanh thiếu niên nghĩ gì về việc trò chuyện trên Internet? - Dễ hơn nói chuyện trực tiếp."
  },
  {
    id: 66,
    question: "The percentage of 40% refers to ________.",
    options: { A: "Parents who let kids use social media", B: "Parents who don’t want kids to use it", C: "Parents who use social media", D: "Parents who don’t use social media" },
    correctAnswer: "C",
    translation: "Tỷ lệ 40% đề cập đến các bậc cha mẹ sử dụng mạng xã hội."
  },
  {
    id: 67,
    question: "Which sentence is NOT TRUE according to the passage?",
    options: { A: "Teens find it easier to talk online.", B: "Most teenagers lack communication skill.", C: "Most parents know how to guide kids online.", D: "Parents often don’t know how to deal with overuse." },
    correctAnswer: "C",
    translation: "Câu nào KHÔNG ĐÚNG theo đoạn văn? - Hầu hết các bậc cha mẹ đều biết cách hướng dẫn con cái trực tuyến."
  },
  {
    id: 68,
    question: "The word “overuse” means ________.",
    options: { A: "using too much", B: "using overnight", C: "using without thinking", D: "using carelessly" },
    correctAnswer: "A",
    translation: "Từ “lạm dụng” có nghĩa là sử dụng quá nhiều."
  },
  {
    id: 69,
    question: "A hobby is often done in one’s free time.",
    options: { A: "True", B: "False" },
    correctAnswer: "A",
    translation: "Sở thích thường được thực hiện trong thời gian rảnh. (Đúng)"
  },
  {
    id: 70,
    question: "People can gain skills and knowledge through taking up a hobby.",
    options: { A: "True", B: "False" },
    correctAnswer: "A",
    translation: "Mọi người có thể có được các kỹ năng và kiến ​​thức thông qua việc bắt đầu một sở thích. (Đúng)"
  },
  {
    id: 71,
    question: "A hobby is mostly developed from the age of two to three.",
    options: { A: "True", B: "False" },
    correctAnswer: "B",
    translation: "Sở thích chủ yếu được phát triển từ hai đến ba tuổi. (Sai)"
  },
  {
    id: 72,
    question: "It’s difficult to predict one’s new hobby development.",
    options: { A: "True", B: "False" },
    correctAnswer: "A",
    translation: "Khó có thể dự đoán được sự phát triển sở thích mới của một người. (Đúng)"
  },
  {
    id: 73,
    question: "Involving in a hobby negatively affects one’s health.",
    options: { A: "True", B: "False" },
    correctAnswer: "B",
    translation: "Tham gia vào một sở thích ảnh hưởng tiêu cực đến sức khỏe của một người. (Sai)"
  },
  {
    id: 74,
    question: "In the United States, most people take a shower once a day in the _______.",
    options: { A: "morning", B: "evening", C: "afternoon", D: "night" },
    correctAnswer: "A",
    translation: "Ở Hoa Kỳ, hầu hết mọi người tắm vòi sen mỗi ngày một lần vào buổi sáng."
  },
  {
    id: 75,
    question: "Children often take a bath each _______.",
    options: { A: "morning", B: "afternoon", C: "night", D: "weekend" },
    correctAnswer: "C",
    translation: "Trẻ em thường tắm bồn mỗi tối."
  },
  {
    id: 76,
    question: "Adults take a bath to get rid of _______.",
    options: { A: "stress", B: "dirt", C: "heat", D: "tiredness" },
    correctAnswer: "A",
    translation: "Người lớn tắm bồn để giải tỏa căng thẳng."
  },
  {
    id: 77,
    question: "What should you remember when taking a bath in the U.S.?",
    options: { A: "Keep water inside the bathtub.", B: "Leave water on the floor.", C: "Use a lot of soap.", D: "Don’t close the drain." },
    correctAnswer: "A",
    translation: "Bạn nên nhớ điều gì khi tắm bồn ở Mỹ? - Giữ nước bên trong bồn tắm."
  },
  {
    id: 78,
    question: "Poor farmers use the (1) __________ land over and over.",
    options: { A: "similar", B: "same", C: "likely", D: "alike" },
    correctAnswer: "B",
    translation: "Nông dân nghèo sử dụng cùng một mảnh đất lặp đi lặp lại."
  },
  {
    id: 79,
    question: "The land also needs a rest so that it (2) __________ be better.",
    options: { A: "will", B: "have", C: "used to", D: "seems" },
    correctAnswer: "A",
    translation: "Đất cũng cần được nghỉ ngơi để có thể tốt hơn."
  },
  {
    id: 80,
    question: "(3) __________ farmers must have food to support their lives.",
    options: { A: "Therefore", B: "However", C: "So", D: "Moreover" },
    correctAnswer: "B",
    translation: "Tuy nhiên nông dân phải có thức ăn để duy trì cuộc sống."
  }
];
