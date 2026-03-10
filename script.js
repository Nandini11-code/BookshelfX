// ==================== BOOKS DATABASE ====================
const booksDatabase = [
    {
        id: 1,
        title: "The Midnight Library",
        author: "Matt Haig",
        genre: "fiction",
        pages: 288,
        image: "📚",
        description: "A dazzling novel about all the choices that go into a life well lived. Nora Seed finds herself in the Midnight Library, caught between life and death, where she explores alternate versions of her life based on different choices.",
        format: "ebook",
        price: 9.99,
        rating: 5,
        readingLink: "https://read.amazon.in/sample/1786892707?clientId=share"
    },
    {
        id: 2,
        title: "The Silent Patient",
        author: "Alex Michaelides",
        genre: "mystery",
        pages: 336,
        image: "🔍",
        description: "A shocking psychological thriller about a woman who shoots her husband five times in the face and never speaks a word again. A psychotherapist becomes obsessed with uncovering the reason for her silence.",
        format: "ebook",
        price: 8.99,
        rating: 5,
        readingLink: "https://read.amazon.in/sample/125030170X?clientId=share"
    },
    {
        id: 3,
        title: "It Ends with Us",
        author: "Colleen Hoover",
        genre: "romance",
        pages: 320,
        image: "💕",
        description: "A powerful story about a young woman who must decide whether to stay in her abusive relationship. A gripping exploration of love, strength, and survival.",
        format: "ebook",
        price: 14.99,
        rating: 4.5,
        readingLink: "https://read.amazon.in/sample/1501110365?clientId=share"
    },
    {
        id: 4,
        title: "Project Hail Mary",
        author: "Andy Weir",
        genre: "science",
        pages: 496,
        image: "🚀",
        description: "A lone astronaut must save Earth from extinction in this thrilling science fiction adventure. With humor, ingenuity, and determination, he races against time to prevent an extinction-level threat.",
        format: "ebook",
        price: 18.50,
        rating: 4.9,
        readingLink: "https://read.amazon.in/sample/B08FFJS3YW?clientId=share"
    },
    {
        id: 5,
        title: "The Priory of the Orange Tree",
        author: "Samantha Shannon",
        genre: "fantasy",
        pages: 848,
        image: "🐉",
        description: "An epic fantasy novel featuring dragons, magic, and political intrigue. A sweeping tale of queens, mages, and dragon riders in a richly imagined world.",
        format: "ebook",
        price: 22.00,
        rating: 4.6,
        readingLink: "https://read.amazon.in/sample/B07DFFQ2WQ?clientId=share"
    },
    {
        id: 6,
        title: "Educated",
        author: "Tara Westover",
        genre: "biography",
        pages: 352,
        image: "📖",
        description: "A memoir about a woman who grows up in a survivalist family and pursues education despite her upbringing. A powerful testament to the transformative power of learning.",
        format: "ebook",
        price: 12.99,
        rating: 4.8,
        readingLink: "https://read.amazon.in/sample/B07142R12X?clientId=share"
    },
    {
        id: 7,
        title: "The Seven Husbands of Evelyn Hugo",
        author: "Taylor Jenkins Reid",
        genre: "fiction",
        pages: 400,
        image: "⭐",
        description: "A Hollywood starlet tells the truth about her glamorous life and scandalous secrets. A tale of ambition, love, and self-discovery in the golden age of cinema.",
        format: "ebook",
        price: 15.99,
        rating: 4.7,
        readingLink: "https://read.amazon.in/sample/1501161938?clientId=share"
    },
    {
        id: 8,
        title: "And Then There Were None",
        author: "Agatha Christie",
        genre: "mystery",
        pages: 272,
        image: "🎭",
        description: "Ten strangers are invited to an island, accused of murders they may or may not have committed. A masterpiece of suspense as they are eliminated one by one.",
        format: "ebook",
        price: 11.50,
        rating: 4.6,
        readingLink: "https://read.amazon.in/sample/B0046H95RM?clientId=share"
    },
    {
        id: 9,
        title: "I Who Have Never Known Men",
        author: "Jacqueline Harpman",
        genre: "romance",
        pages: 208,
        image: "�",
        description: "A poignant and introspective novel exploring themes of isolation, identity, and human connection through the eyes of a woman emerging from captivity.",
        format: "ebook",
        price: 6.99,
        rating: 4,
        readingLink: "https://read.amazon.in/sample/B07L6XBVSQ?clientId=share"
    },
    {
        id: 10,
        title: "Dune",
        author: "Frank Herbert",
        genre: "science",
        pages: 612,
        image: "🌍",
        description: "An epic science fiction masterpiece about a boy and his rise to power on a desert planet. A complex tale of politics, religion, and environmental science.",
        format: "ebook",
        price: 19.99,
        rating: 4.8,
        readingLink: "https://read.amazon.in/sample/B004KA9UXO?clientId=share"
    },
    {
        id: 11,
        title: "The Name of the Wind",
        author: "Patrick Rothfuss",
        genre: "fantasy",
        pages: 662,
        image: "✨",
        description: "A young wizard tells the story of his years at magic university. A beautifully crafted fantasy with mystery, magic, and romance.",
        format: "ebook",
        price: 21.00,
        rating: 4.9,
    },
    {
        id: 12,
        title: "Steve Jobs",
        author: "Walter Isaacson",
        genre: "biography",
        pages: 656,
        image: "💻",
        description: "An authorized biography of the Apple co-founder. An intimate portrait of a visionary who changed multiple industries.",
        format: "ebook",
        price: 16.99,
        rating: 4.7,
        readingLink: "https://read.amazon.in/sample/B0C659QT2R?clientId=share"
    },
    {
        id: 13,
        title: "The Metamorphosis",
        author: "Franz Kafka",
        genre: "classic",
        pages: 180,
        image: "📖",
        description: "A haunting novella about a man's transformation into an insect and its devastating effects on his family. A profound exploration of isolation, identity, and existential dread.",
        format: "ebook",
        price: 9.99,
        rating: 4.5,
        readingLink: "https://read.amazon.in/sample/1513263528?clientId=share"

    },
    {
        id: 14,
        title: "Dead Poets Society",
        author: "N.H. Kleinbaum",
        genre: "fiction",
        pages: 559,
        image: "📚",
        description: "An inspiring novel about a group of students at a prestigious boarding school whose lives are transformed by an inspiring English teacher. A celebration of literature, individuality, and seizing the moment.",
        format: "ebook",
        price: 13.99,
        rating: 4.6,
        readingLink: "https://read.amazon.in/sample/B00W3MM6YQ?clientId=share"
    },
    {
        id: 15,
        title: "Asylum",
        author: "Madeleine Roux",
        genre: "horror",
        pages: 420,
        image: "🎪",
        description: "A chilling horror novel set in an abandoned psychiatric hospital where dark secrets and supernatural forces lurk within the crumbling walls. A gripping tale of mystery and terror.",
        format: "ebook",
        price: 12.99,
        rating: 4.4,
        readingLink: "https://read.amazon.in/sample/0062220977?clientId=share"
    },
    {
        id: 16,
        title: "Hamlet",
        author: "William Shakespeare",
        genre: "classic",
        pages: 447,
        image: "❄️",
        description: "Shakespeare's masterpiece about a Danish prince who feigns madness to avenge his father's murder. A timeless exploration of revenge, madness, mortality, and the human condition.",
        format: "ebook",
        price: 11.99,
        rating: 4.8,
        readingLink: "https://read.amazon.in/sample/B002XHNNN4?clientId=share"
    },
    {
        id: 19,
        title: "The Pillars of the Earth",
        author: "Ken Follett",
        genre: "historical-fiction",
        pages: 973,
        image: "🏰",
        cover: "https://i.pinimg.com/1200x/94/bb/7b/94bb7b77b87225cfe1e2513c25446b80.jpg",
        description: "A sweeping epic of love, intrigue, and ambition set during the construction of a cathedral in medieval England.",
        longDescription: "The Pillars of the Earth follows the lives of builders, nobles, and clergy as they navigate power struggles and personal drama. Follett's historical detail and storytelling are masterful.",
        preview: "'The small boys came early to the hanging.'",
        format: "ebook",
        price: 19.99,
        rating: 4.7,
        readingLink: "https://read.amazon.in/sample/0451207149?clientId=share"
    },
    {
        id: 20,
        title: "The Book Thief",
        author: "Markus Zusak",
        genre: "historical-fiction",
        pages: 552,
        image: "📚",
        cover: "https://i.pinimg.com/736x/a4/b7/27/a4b727c4d6718e8f8336cf5b9185ccf0.jpg",
        description: "A young girl steals books and shares them in Nazi Germany, narrated by Death. A story of hope, courage, and the power of words.",
        longDescription: "The Book Thief is a moving novel about Liesel Meminger, her foster family, and the people she meets during WWII. Zusak's unique narration and emotional depth make this a modern classic.",
        preview: "'First the colors. Then the humans. That's usually how I see things. Or at least, how I try.'",
        format: "ebook",
        price: 17.99,
        rating: 4.8,
        readingLink: "https://read.amazon.in/sample/0552779733?clientId=share"
    },
    {
        id: 21,
        title: "The Girl with the Dragon Tattoo",
        author: "Stieg Larsson",
        genre: "crime-mystery",
        pages: 465,
        image: "🕵️‍♀️",
        cover: "https://i.pinimg.com/1200x/af/16/81/af1681ea609dca741b17ee14130795d0.jpg",
        description: "A journalist and a hacker investigate a decades-old disappearance, uncovering dark secrets in Sweden.",
        longDescription: "The Girl with the Dragon Tattoo is a gripping thriller featuring Lisbeth Salander and Mikael Blomkvist. Larsson's novel blends mystery, crime, and social commentary.",
        preview: "'It happened every year, was almost a ritual. And this was his eighty-second birthday.'",
        format: "ebook",
        price: 15.99,
        rating: 4.7,
        readingLink: "https://read.amazon.in/sample/B00480O9L4?clientId=share"
    },
    {
        id: 22,
        title: "Gone Girl",
        author: "Gillian Flynn",
        genre: "crime-mystery",
        pages: 432,
        image: "🔪",
        cover: "https://i.pinimg.com/1200x/5a/6f/79/5a6f79cdd03b9a1cebbc486a31d76d4a.jpg",
        description: "A marriage unravels when Amy disappears, and Nick becomes the prime suspect. Twists and psychological suspense abound.",
        longDescription: "Gone Girl is a psychological thriller that explores the dark side of marriage and media. Flynn's storytelling keeps readers guessing until the end.",
        preview: "'When I think of my wife, I always think of her head. The shape of it, to begin with.'",
        format: "ebook",
        price: 16.99,
        rating: 4.6,
        readingLink: "https://read.amazon.in/sample/B007ZXK08C?clientId=share"
    },
    {
        id: 23,
        title: "A Game of Thrones",
        author: "George R.R. Martin",
        genre: "fantasy-horror",
        pages: 694,
        image: "🧙‍♂️",
        cover: "https://i.pinimg.com/736x/be/ae/1e/beae1edbc1b168cbf4e54af8643b03e6.jpg",
        description: "Noble families vie for power in the Seven Kingdoms, where winter is coming and dragons return. Epic fantasy and intrigue.",
        longDescription: "A Game of Thrones is the first book in the Song of Ice and Fire series. Martin's world is filled with complex characters, political machinations, and dark magic.",
        preview: "'We should start back,' Gared urged as the woods began to grow dark around them.'",
        format: "ebook",
        price: 21.99,
        rating: 4.8,
        readingLink: "https://read.amazon.in/sample/0007448031?clientId=share"
    },
    {
        id: 24,
        title: "The Shining",
        author: "Stephen King",
        genre: "fantasy-horror",
        pages: 447,
        image: "👻",
        cover: "https://i.pinimg.com/736x/66/1c/c6/661cc6c411a9e6a3c6a4352c80a76a7e.jpg",
        description: "A haunted hotel, a troubled family, and supernatural terror. Jack Torrance faces the evil of the Overlook Hotel.",
        longDescription: "The Shining is a horror classic, exploring isolation, madness, and the supernatural. King's writing creates a chilling atmosphere and unforgettable characters.",
        preview: "'Jack Torrance thought: Officious little prick.'",
        format: "ebook",
        price: 14.99,
        rating: 4.7,
        readingLink: "https://read.amazon.in/sample/0743424425?clientId=share"
    },
    {
        id: 25,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "romance",
        pages: 432,
        image: "💖",
        cover: "https://i.pinimg.com/736x/56/fa/9c/56fa9cbf2fde277cf9818342e33e1bbe.jpg",
        description: "Elizabeth Bennet navigates love, society, and family in Regency England. A classic romance and social satire.",
        longDescription: "Pride and Prejudice is a timeless story of wit, misunderstandings, and the search for happiness. Austen's characters and prose are beloved worldwide.",
        preview: "'It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.'",
        format: "ebook",
        price: 12.99,
        rating: 4.9,
        readingLink: "https://read.amazon.in/sample/0198826737?clientId=share"
    },
    {
        id: 26,
        title: "The Notebook",
        author: "Nicholas Sparks",
        genre: "romance",
        pages: 214,
        image: "📓",
        cover: "https://i.pinimg.com/736x/ef/2f/c2/ef2fc23da6de405fb1cba0fc46a1d4ab.jpg",
        description: "A lifelong love story between Noah and Allie, spanning decades and memories. Heartfelt and emotional.",
        longDescription: "The Notebook is a moving tale of love, loss, and devotion. Sparks' novel explores the power of memory and the endurance of true love.",
        preview: "'Who am I? And how, I wonder, will this story end?'",
        format: "ebook",
        price: 14.99,
        rating: 4.7,
        readingLink: "https://read.amazon.in/sample/B004TSKL44?clientId=share"
    },
    {
        id: 27,
        title: "Becoming",
        author: "Michelle Obama",
        genre: "biography",
        pages: 448,
        image: "👩",
        cover: "https://i.pinimg.com/736x/e6/9c/f0/e69cf0c7ddbbf6a20b81920ac006687b.jpg",
        description: "Michelle Obama's inspiring memoir about her journey from Chicago to the White House.",
        longDescription: "Becoming is a deeply personal account of Michelle Obama's life, her values, and her experiences as First Lady. It is a story of hope, resilience, and empowerment.",
        preview: "'When I was a kid, my aspirations were simple. I wanted a dog. I wanted a house that had stairs in it. I wanted, for some reason, a four-door car.'",
        format: "ebook",
        price: 18.99,
        rating: 4.8,
        readingLink: "https://read.amazon.in/sample/B08TRC5462?clientId=share"
    },
    {
        id: 28,
        title: "The Power of Now",
        author: "Eckhart Tolle",
        genre: "religion-spirituality",
        pages: 236,
        image: "🧘",
        cover: "https://i.pinimg.com/1200x/b5/e1/0b/b5e10bc744e2302709a47c5fb55644ae.jpg",
        description: "A guide to spiritual enlightenment and living in the present moment.",
        longDescription: "The Power of Now teaches readers how to free themselves from the tyranny of the mind and find peace in the present. Tolle's wisdom is transformative and practical.",
        preview: "'Realize deeply that the present moment is all you ever have.'",
        format: "ebook",
        price: 13.99,
        rating: 4.7,
        readingLink: "https://read.amazon.in/sample/1577314808?clientId=share"
    },
    {
        id: 29,
        title: "The Alchemist",
        author: "Paulo Coelho",
        genre: "religion-spirituality",
        pages: 208,
        image: "🌟",
        cover: "https://i.pinimg.com/736x/66/6b/62/666b620e5b3e04e479ad862715d171d0.jpg",
        description: "A magical fable about following your dreams and listening to your heart.",
        longDescription: "The Alchemist is a global bestseller that tells the story of Santiago, a shepherd boy who embarks on a journey to find his personal legend. Coelho's novel is full of wisdom and inspiration.",
        preview: "'When you want something, all the universe conspires in helping you to achieve it.'",
        format: "ebook",
        price: 15.99,
        rating: 4.8,
        readingLink: "https://read.amazon.in/sample/0722532938?clientId=share"
    },
    {
        id: 30,
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        genre: "business-economics",
        pages: 499,
        image: "🧠",
        cover: "https://i.pinimg.com/736x/4e/d0/25/4ed0256d4b7f5c7a694aad414f0121a5.jpg",
        description: "A groundbreaking exploration of how we think, make decisions, and the biases that affect us.",
        longDescription: "Thinking, Fast and Slow presents Kahneman's research on dual-system thinking: intuitive and deliberate. Essential reading for anyone interested in psychology and economics.",
        preview: "'The premise of this book is that it is easier to recognize other people's mistakes than our own.'",
        format: "ebook",
        price: 17.99,
        rating: 4.8,
        readingLink: "https://read.amazon.in/sample/1846140552?clientId=share"
    },
    {
        id: 31,
        title: "The Intelligent Investor",
        author: "Benjamin Graham",
        genre: "business-economics",
        pages: 640,
        image: "💼",
        cover: "https://i.pinimg.com/736x/70/19/78/701978ec48abe4caf7adeae464a2974f.jpg",
        description: "The classic guide to value investing, risk management, and financial wisdom.",
        longDescription: "The Intelligent Investor is a must-read for anyone interested in investing. Graham's principles have shaped generations of investors, including Warren Buffett.",
        preview: "'Investment is most intelligent when it is most businesslike.'",
        format: "ebook",
        price: 21.99,
        rating: 4.7,
        readingLink: "https://read.amazon.in/sample/0060555661?clientId=share"
    },
    {
        id: 32,
        title: "The Emperor of All Maladies",
        author: "Siddhartha Mukherjee",
        genre: "medicine",
        pages: 608,
        image: "🩺",
        cover: "https://i.pinimg.com/1200x/1f/18/b1/1f18b1cef43e9062a2e3f3638df2ec13.jpg",
        description: "A biography of cancer, its history, treatment, and the ongoing fight against it.",
        longDescription: "The Emperor of All Maladies is a fascinating and moving account of cancer, blending science, history, and personal stories. Mukherjee's writing is both informative and inspiring.",
        preview: "'Cancer is not one disease but many.'",
        format: "ebook",
        price: 22.99,
        rating: 4.8,
        readingLink: "https://read.amazon.in/sample/0007250924?clientId=share"
    },
    {
        id: 33,
        title: "When Breath Becomes Air",
        author: "Paul Kalanithi",
        genre: "medicine",
        pages: 228,
        image: "💨",
        cover: "https://i.pinimg.com/736x/1b/e5/42/1be54202cee1007cbb4d5966dcbf234e.jpg",
        description: "A neurosurgeon's memoir about facing terminal illness and finding meaning in life and death.",
        longDescription: "When Breath Becomes Air is a poignant reflection on mortality, purpose, and the human spirit. Kalanithi's story is deeply moving and beautifully written.",
        preview: "'I can't go on. I'll go on.'",
        format: "ebook",
        price: 15.99,
        rating: 4.9,
        readingLink: "https://read.amazon.in/sample/B0165X8WN2?clientId=share"
    },
    {
        id: 34,
        title: "Atomic Habits",
        author: "James Clear",
        genre: "self-help",
        pages: 320,
        image: "🧬",
        cover: "https://i.pinimg.com/736x/b4/f1/e1/b4f1e1a9313688ce9f9347cb5e9123ed.jpg",
        description: "A practical guide to building good habits, breaking bad ones, and mastering the tiny behaviors that lead to remarkable results.",
        longDescription: "Atomic Habits offers actionable strategies for forming positive habits, overcoming obstacles, and making lasting change. James Clear's insights are backed by scientific research and real-world examples.",
        preview: "'You do not rise to the level of your goals. You fall to the level of your systems.'",
        format: "ebook",
        price: 16.99,
        rating: 4.8,
        readingLink: "https://read.amazon.in/sample/B01N5AX61W?clientId=share"
    },
    {
        id: 35,
        title: "The Life-Changing Magic of Tidying Up",
        author: "Marie Kondo",
        genre: "self-help",
        pages: 224,
        image: "✨",
        cover: "https://i.pinimg.com/1200x/06/26/88/0626887d065c248c5b75c1f102f0933c.jpg",
        description: "Marie Kondo's revolutionary method for decluttering and organizing your home and life.",
        longDescription: "The Life-Changing Magic of Tidying Up introduces the KonMari method, helping readers transform their spaces and mindsets. Kondo's approach is both practical and inspiring.",
        preview: "'The question of what you want to own is actually the question of how you want to live your life.'",
        format: "ebook",
        price: 18.99,
        rating: 4.7,
        readingLink: "https://read.amazon.in/sample/0091955106?clientId=share"
    },
    {
        id: 36,
        title: "Watchmen",
        author: "Alan Moore",
        genre: "graphic-novel",
        pages: 416,
        image: "🦸‍♂️",
        cover: "https://i.pinimg.com/1200x/c8/51/5e/c8515ec44d3a556ce3c1bd3ba3fa92b2.jpg",
        description: "A groundbreaking graphic novel that redefined superheroes, blending mystery, politics, and moral ambiguity.",
        longDescription: "Watchmen is a complex, multi-layered story set in an alternate history. Alan Moore's writing and Dave Gibbons' art create a masterpiece of the genre.",
        preview: "'Who watches the Watchmen?'",
        format: "ebook",
        price: 22.99,
        rating: 4.9,
        readingLink: "https://read.amazon.in/sample/B07ST6DPBQ?clientId=share"
    },
    {
        id: 37,
        title: "Fullmetal Alchemist",
        author: "Hiromu Arakawa",
        genre: "graphic-novel",
        pages: 520,
        image: "⚗️",
        cover: "https://i.pinimg.com/736x/0c/3b/29/0c3b29c87cd9f95f566c238be4ba9122.jpg",
        description: "A manga series about two brothers who use alchemy to search for the Philosopher's Stone and restore their bodies.",
        longDescription: "Fullmetal Alchemist blends adventure, philosophy, and emotion in a story about sacrifice, redemption, and the limits of science. Hiromu Arakawa's work is beloved worldwide.",
        preview: "'Humankind cannot gain anything without first giving something in return.'",
        format: "ebook",
        price: 19.99,
        rating: 4.8,
        readingLink: "https://read.amazon.in/sample/B00JDRKY48?clientId=share"
    },
    {
        id: 38,
        title: "Ways of Seeing",
        author: "John Berger",
        genre: "art-theory",
        pages: 176,
        image: "👁️",
        cover: "https://i.pinimg.com/736x/31/c7/98/31c79835a15c4317b3a2bb1ec878a6cf.jpg",
        description: "A classic exploration of how we perceive art and images, challenging traditional assumptions.",
        longDescription: "Ways of Seeing is a groundbreaking book and TV series that changed how we look at art, images, and visual culture. Berger's insights are provocative and accessible.",
        preview: "'Seeing comes before words. The child looks and recognizes before it can speak.'",
        format: "ebook",
        price: 13.99,
        rating: 4.7,
        readingLink: "https://read.amazon.in/sample/0140135154?clientId=share"
    },
    {
        id: 39,
        title: "Making Movies",
        author: "Sidney Lumet",
        genre: "art-theory",
        pages: 220,
        image: "🎬",
        cover: "https://i.pinimg.com/736x/8c/73/df/8c73df0ed0cf830aec19b77ca6d7d366.jpg",
        description: "Making Movies by Sidney Lumet gives readers a behind-the-scenes look at how films are created. The legendary director explains every stage of filmmaking, from choosing scripts to directing actors and editing scenes. With real examples from his career, Lumet shares practical insights about storytelling, creativity, and the teamwork behind great movies.",
        longDescription: "Making Movies is a classic guide to filmmaking written by renowned director Sidney Lumet. In this book, Lumet takes readers through the entire process of creating a film, including script selection, casting, directing, cinematography, and editing. Drawing from his decades of experience in Hollywood, he explains the artistic and technical challenges of filmmaking in a clear and engaging way. The book offers valuable lessons for aspiring filmmakers, writers, and anyone curious about how movies are made behind the camera.",
        preview: "An insightful look into the filmmaking process by legendary director Sidney Lumet.",
        format: "ebook",
        price: 9.99,
        rating: 4.5,
        readingLink: ""
    },
    {
        id: 40,
        title: "Code: The Hidden Language of Hardware and Software",
        author: "Charles Petzold",
        genre: "technology",
        pages: 400,
        image: "💻",
        cover: "https://i.pinimg.com/736x/12/e8/44/12e8447bfc3491e7104a851f7f526b1b.jpg",
        description: "A fascinating exploration of how computers work, from the basics of binary to modern software.",
        longDescription: "Code is a unique journey through the fundamental concepts of computing, electronics, and programming. Petzold explains complex ideas in an accessible and engaging way.",
        preview: "'What is code? It's the language that makes computers work.'",
        format: "ebook",
        price: 19.99,
        rating: 4.8,
        readingLink: "https://read.amazon.in/sample/B0DFX4Z6JB?clientId=share"
    },
    {
        id: 41,
        title: "The Pragmatic Programmer",
        author: "Andrew Hunt",
        genre: "technology",
        pages: 352,
        image: "🛠️",
        cover: "https://i.pinimg.com/1200x/40/93/9b/40939b6a7aa2bbef0cf8e569a7ffd1d3.jpg",
        description: "Essential advice and best practices for software developers, covering everything from code quality to career growth.",
        longDescription: "The Pragmatic Programmer is a classic in software engineering, offering practical tips, philosophy, and wisdom for programmers of all levels. Hunt's guidance is timeless and actionable.",
        preview: "'Care about your craft. Think! Provide options. Don't panic.'",
        format: "ebook",
        price: 21.99,
        rating: 4.9,
        readingLink: "https://read.amazon.in/sample/B003GCTQAE?clientId=share"
    },
    {
        id: 42,
        title: "Short Stories in Spanish",
        author: "Olly Richards",
        genre: "language-learning",
        pages: 240,
        image: "📖",
        cover: "https://i.pinimg.com/1200x/18/69/20/1869200cecba9aa2eb7d1651cd6f9522.jpg ",
        description: "A collection of engaging short stories for learners of Spanish, designed to improve vocabulary and comprehension.",
        longDescription: "Short Stories in Spanish offers a fun and effective way to learn Spanish through real, accessible stories. Includes vocabulary lists and comprehension questions.",
        preview: "'Cada historia está diseñada para ayudarte a aprender español de manera natural.'",
        format: "ebook",
        price: 14.99,
        rating: 4.6,
        readingLink: "https://read.amazon.in/sample/1473683254?clientId=share"
    },
    {
        id: 43,
        title: "The Little Prince (Le Petit Prince)",
        author: "Antoine de Saint-Exupéry",
        genre: "classic",
        pages: 96,
        image: "🪐",
        cover: "https://i.pinimg.com/1200x/b3/e1/70/b3e1704eb1dc78d4fbd52d9ec6f5229d.jpg",
        description: "A timeless tale of innocence, friendship, and discovery, beloved by readers of all ages.",
        longDescription: "The Little Prince is a poetic story that explores themes of love, loss, and imagination. Its gentle wisdom and beautiful illustrations have made it a classic worldwide.",
        preview: "'What is essential is invisible to the eye.'",
        format: "ebook",
        price: 12.99,
        rating: 4.9,
        readingLink: "https://read.amazon.in/sample/1784284246?clientId=share"
    },
    {
        id: 44,
        title: "Principles of Economics",
        author: "N. Gregory Mankiw",
        genre: "business-economics",
        pages: 880,
        image: "💵",
        cover: "https://i.pinimg.com/736x/2a/8c/6d/2a8c6d7c947a12f26e19d4b44ca5e256.jpg",
        description: "A comprehensive introduction to economics, covering fundamental principles and real-world applications.",
        longDescription: "Principles of Economics is widely used in classrooms and by self-learners. Mankiw explains economic concepts clearly, with examples and exercises.",
        preview: "'Economics is the study of how society manages its scarce resources.'",
        format: "ebook",
        price: 29.99,
        rating: 4.7,
        readingLink: ""
    },
    {
        id: 45,
        title: "Campbell Biology",
        author: "Lisa Urry et al.",
        genre: "science",
        pages: 1488,
        image: "🧬",
        cover: "https://i.pinimg.com/1200x/4c/1d/e5/4c1de577a42cb776b2f7a27f8f2d954a.jpg",
        description: "The leading textbook for introductory biology, trusted by students and educators worldwide.",
        longDescription: "Campbell Biology provides comprehensive coverage of biological concepts, with clear explanations, illustrations, and real-world examples.",
        preview: "'Biology is the scientific study of life.'",
        format: "ebook",
        price: 49.99,
        rating: 4.8,
        readingLink: "https://read.amazon.in/sample/B084TP1TLC?clientId=share"
    },
    {
        id: 46,
        title: "The Crochet Answer Book",
        author: "Edie Eckman",
        genre: "crafts-hobbies",
        pages: 432,
        image: "🧶",
        cover: "https://i.pinimg.com/1200x/0a/fe/57/0afe575f8b914d3a00d303191fb6781f.jpg",
        description: "A handy reference for crochet enthusiasts, answering common questions and providing tips and techniques.",
        longDescription: "The Crochet Answer Book is a go-to guide for beginners and experienced crocheters alike. Includes troubleshooting, patterns, and expert advice.",
        preview: "'Every crocheter has questions—this book has answers.'",
        format: "ebook",
        price: 11.99,
        rating: 4.5,
        readingLink: ""
    },
    {
        id: 47,
        title: "Drawing on the Right Side of the Brain",
        author: "Betty Edwards",
        genre: "art-theory",
        pages: 320,
        image: "✏️",
        cover: "https://i.pinimg.com/1200x/d2/0d/e3/d20de3ab3ba6b77eebf3262335525b46.jpg",
        description: "A revolutionary approach to learning how to draw, focusing on perception and creativity.",
        longDescription: "Drawing on the Right Side of the Brain teaches readers to unlock their artistic potential by changing how they see and interpret the world. Includes exercises and techniques.",
        preview: "'You can learn to draw. All it takes is a new way of seeing.'",
        format: "ebook",
        price: 15.99,
        rating: 4.7,
        readingLink: "https://read.amazon.in/sample/0874774195?clientId=share"
    }
];

// ==================== AUTHORS DATABASE ====================
const authorsDatabase = [
    {
        id: 1,
        name: "Matt Haig",
        books: 15,
        description: "Award-winning author known for philosophical fiction",
        image: "https://i.pinimg.com/736x/42/2b/8f/422b8f38ca52f9e713326cade0bd75b8.jpg"
    },
    {
        id: 2,
        name: "Alex Michaelides",
        books: 5,
        description: "Psychological thriller writer with international acclaim",
        image: "https://i.pinimg.com/1200x/59/d0/94/59d0948f350fc3941fbb0e85fe324a36.jpg"
    },
    {
        id: 3,
        name: "Colleen Hoover",
        books: 20,
        description: "Contemporary romance author beloved by millions",
        image: "https://i.pinimg.com/1200x/41/97/77/419777c1940bb91693d943bc8089e479.jpg"
    },
    {
        id: 4,
        name: "Andy Weir",
        books: 8,
        description: "Science fiction author and engineer",
        image: "https://i.pinimg.com/1200x/d8/fc/e2/d8fce2996dfefb07926f06f33fa98932.jpg"
    },
    {
        id: 5,
        name: "Samantha Shannon",
        books: 6,
        description: "Epic fantasy writer with intricate worldbuilding",
        image: "https://i.pinimg.com/736x/2e/47/bb/2e47bbf01eedec83d9436cd67ba12ced.jpg"
    },
    {
        id: 6,
        name: "Tara Westover",
        books: 2,
        description: "Memoir writer and educator",
        image: "https://i.pinimg.com/1200x/80/66/4a/80664aa43eeaf0773d577e9a983c8b66.jpg"
    }
];

// ==================== STATE MANAGEMENT ====================
let borrowedBooks = JSON.parse(localStorage.getItem('borrowedBooks')) || [];
let selectedBook = null;

// ==================== FILTER STATE ====================
let currentFilters = {
    search: '',
    genres: [],
    sortBy: 'title'
};

// ==================== INITIALIZATION ====================
document.addEventListener('DOMContentLoaded', () => {
    populateFilteredBooks();
    populateAuthors();
    updateLibraryDisplay();
    updateCartBadge();
    setupEventListeners();
    startCountdownUpdater();
    addBookFormats();
    addBookPrices();
    addBookRatings();
    checkLocationPermission();
    checkUserLogin();
    initializeNavScroll();
});

// ==================== NAVIGATION SCROLL HANDLING ====================
function initializeNavScroll() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');
    
    // Add smooth scrolling to nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                if (href === '#catalog') {
                    enterCatalogView();
                } else {
                    exitCatalogView();
                    const targetSection = document.querySelector(href);
                    if (targetSection) {
                        targetSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            }
        });
    });
    
    function updateActiveNav() {
        const scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNav);
    updateActiveNav(); // Initial call
}

// ==================== CATALOG VIEW FUNCTIONS ====================
function enterCatalogView() {
    document.getElementById('catalog').scrollIntoView({behavior: 'smooth'});
}

function exitCatalogView() {
    document.body.classList.remove('catalog-view');
}

// Add random formats, prices, and ratings to books
function addBookFormats() {
    const formats = ['hardcover', 'paperback', 'ebook'];
    booksDatabase.forEach(book => {
        book.format = formats[Math.floor(Math.random() * formats.length)];
    });
}

function addBookPrices() {
    booksDatabase.forEach(book => {
        book.price = Math.floor(Math.random() * 80) + 5; // Price between $5-85
    });
}

function addBookRatings() {
    booksDatabase.forEach(book => {
        book.rating = Math.floor(Math.random() * 5) + 1; // Rating 1-5 stars
    });
}

// ==================== EVENT LISTENERS ====================
function setupEventListeners() {
    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        const bookModal = document.getElementById('bookModal');
        const loginModal = document.getElementById('loginModal');
        if (event.target === bookModal) {
            closeModal();
        }
        if (event.target === loginModal) {
            closeLoginModal();
        }
    });

    // Filter event listeners
    document.getElementById('searchInput').addEventListener('input', (e) => {
        currentFilters.search = e.target.value;
        populateFilteredBooks();
    });

    document.getElementById('genreSelect').addEventListener('change', (e) => {
        currentFilters.genres = e.target.value ? [e.target.value] : [];
        populateFilteredBooks();
    });

    document.getElementById('sortSelect').addEventListener('change', (e) => {
        currentFilters.sortBy = e.target.value;
        populateFilteredBooks();
    });
}

function resetFilters() {
    currentFilters = {
        search: '',
        genres: [],
        sortBy: 'title'
    };

    // Reset form elements
    document.getElementById('searchInput').value = '';
    document.getElementById('genreSelect').value = '';
    document.getElementById('sortSelect').value = 'title';

    populateFilteredBooks();
}

// ==================== BOOK POPULATION ====================
function populateBooks(books) {
    const booksGrid = document.getElementById('booksGrid');
    booksGrid.innerHTML = '';

    books.forEach(book => {
        const bookCard = createBookCard(book);
        booksGrid.appendChild(bookCard);
    });
}

function populateFilteredBooks() {
    const filteredBooks = getFilteredBooks();
    populateBooks(filteredBooks);
}

function getFilteredBooks() {
    let filtered = [...booksDatabase];

    // Search filter
    if (currentFilters.search) {
        const searchTerm = currentFilters.search.toLowerCase();
        filtered = filtered.filter(book =>
            book.title.toLowerCase().includes(searchTerm) ||
            book.author.toLowerCase().includes(searchTerm)
        );
    }

    // Genre filter
    if (currentFilters.genres.length > 0) {
        filtered = filtered.filter(book => currentFilters.genres.includes(book.genre));
    }

    // Sort
    filtered.sort((a, b) => {
        switch (currentFilters.sortBy) {
            case 'author':
                return a.author.localeCompare(b.author);
            case 'price-low':
                return a.price - b.price;
            case 'price-high':
                return b.price - a.price;
            case 'rating':
                return b.rating - a.rating;
            case 'title':
            default:
                return a.title.localeCompare(b.title);
        }
    });

    return filtered;
}

function createBookCard(book) {
    const card = document.createElement('div');
    card.className = 'book-card';
    
    const isBorrowed = borrowedBooks.some(b => b.id === book.id);
    
    // Create star rating - handle decimal ratings (e.g., 4.5 stars)
    const fullStars = Math.floor(book.rating);
    const hasHalfStar = book.rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    const stars = '★'.repeat(fullStars) + (hasHalfStar ? '½' : '') + '☆'.repeat(emptyStars);

    // Special image handling for books with real images
    let imageContent = '';
    if (book.cover) {
        imageContent = `<img src="${book.cover}" alt="${book.title}" style="object-fit: cover;">`;
    } else if (book.id === 1) {
        // The Midnight Library
        imageContent = `<img src="https://i.pinimg.com/736x/ca/e6/0f/cae60f6bf68e602a0846c53cae1bf33d.jpg" alt="${book.title}" style="object-fit: cover;">`;
    } else if (book.id === 2) {
        // The Silent Patient
        imageContent = `<img src="https://i.pinimg.com/736x/87/e5/c7/87e5c7cfd4ac615afea7146203339b96.jpg" alt="${book.title}" style="object-fit: cover;">`;
    } else if (book.id === 3) {
        // It Ends with Us
        imageContent = `<img src="https://i.pinimg.com/736x/14/8c/e1/148ce17a1be95e1b98155305131d5597.jpg" alt="${book.title}" style="object-fit: cover;">`;
    } else if (book.id === 4) {
        // Project Hail Mary
        imageContent = `<img src="https://i.pinimg.com/736x/15/cc/bc/15ccbcecf49d105b45a8986bc3f95f68.jpg" alt="${book.title}" style="object-fit: cover;">`;
    } else if (book.id === 5) {
        // The Priory of the Orange Tree
        imageContent = `<img src="https://i.pinimg.com/1200x/a6/3d/39/a63d392bf4e594dc521d88e1f50f072c.jpg" alt="${book.title}" style="object-fit: cover;">`;
    } else if (book.id === 6) {
        // Educated
        imageContent = `<img src="https://i.pinimg.com/1200x/84/07/fd/8407fdea0a0bb75ce76f5604d2c95dae.jpg" alt="${book.title}" style="object-fit: cover;">`;
    } else if (book.id === 7) {
        // The Seven Husbands of Evelyn Hugo
        imageContent = `<img src="https://i.pinimg.com/736x/44/83/8e/44838eab61b5ada3d4a078707438c076.jpg" alt="${book.title}" style="object-fit: cover;">`;
    } else if (book.id === 8) {
        // And Then There Were None
        imageContent = `<img src="https://i.pinimg.com/1200x/06/cd/d3/06cdd38c3b800a256b8fc30530242dd5.jpg" alt="${book.title}" style="object-fit: cover;">`;
    } else if (book.id === 9) {
        // I Who Have Never Known Men
        imageContent = `<img src="https://i.pinimg.com/1200x/05/f5/34/05f534cdc0f541385a5d9447881398d7.jpg" alt="${book.title}" style="object-fit: cover;">`;
    } else if (book.id === 10) {
        // Dune
        imageContent = `<img src="https://i.pinimg.com/736x/fe/83/94/fe8394f709cf86ab6a94794ed4c79691.jpg" alt="${book.title}" style="object-fit: cover;">`;
    } else if (book.id === 11) {
        // The Name of the Wind
        imageContent = `<img src="https://i.pinimg.com/1200x/88/bb/d9/88bbd966871636ef69bb1cf5893279e4.jpg" alt="${book.title}" style="object-fit: cover;">`;
    } else if (book.id === 12) {
        // Steve Jobs
        imageContent = `<img src="https://i.pinimg.com/1200x/60/60/e4/6060e425541b35aa38b2c1df3989d4a8.jpg" alt="${book.title}" style="object-fit: cover;">`;
    } else if (book.id === 13) {
        // The Metamorphosis
        imageContent = `<img src="https://i.pinimg.com/736x/25/b1/e7/25b1e7ab0aadd76091e084b4b450a6d0.jpg" alt="${book.title}" style="object-fit: cover;">`;
    } else if (book.id === 14) {
        // Dead Poets Society
        imageContent = `<img src="https://i.pinimg.com/736x/0b/01/50/0b0150267679e8246d22671deb37e8cd.jpg" alt="${book.title}" style="object-fit: cover;">`;
    } else if (book.id === 15) {
        // Asylum
        imageContent = `<img src="https://i.pinimg.com/736x/f4/65/c1/f465c15d86417bc9c37e0eeb9f9d130a.jpg" alt="${book.title}" style="object-fit: cover;">`;
    } else if (book.id === 16) {
        // Hamlet
        imageContent = `<img src="https://i.pinimg.com/1200x/19/94/37/1994376031428450fa5c2ac09eb4149c.jpg" alt="${book.title}" style="object-fit: cover;">`;
    } else {
        imageContent = `<div class="book-image-placeholder">${book.image}</div>`;
    }

    card.innerHTML = `
        <div class="book-image">
            ${imageContent}
        </div>
        <div class="book-info">
            <h3 class="book-title">${book.title}</h3>
            <p class="book-author">by ${book.author}</p>
            <span class="book-genre">${capitalizeGenre(book.genre)}</span>
            <div class="book-meta">
                <span class="book-format">${capitalizeFormat(book.format)}</span>
                <span class="book-price">&#8377;${Math.round(book.price * 92)}</span>
            </div>
            <div class="book-rating">
                <span class="stars">${stars}</span>
                <span class="rating-value">${book.rating}/5</span>
            </div>
            <p class="book-pages">${book.pages} pages</p>
            <div class="book-card-actions">
                <button class="btn btn-primary btn-small" onclick="openModal(${book.id})">
                    View Details
                </button>
                ${isBorrowed ? `<button class="btn btn-secondary btn-small" onclick="returnBook(${book.id})">Return</button>` : ''}
            </div>
        </div>
    `;

    return card;
}

// Helper function to capitalize format
function capitalizeFormat(format) {
    const formats = {
        'hardcover': 'Hardcover',
        'paperback': 'Paperback',
        'ebook': 'eBook'
    };
    return formats[format] || format;
}

// ==================== MODAL FUNCTIONS ====================
function openModal(bookId) {
    const book = booksDatabase.find(b => b.id === bookId);
    if (!book) return;

    selectedBook = book;
    const modal = document.getElementById('bookModal');
    const modalImage = document.getElementById('modalBookImage');
    
    // Dynamic image mapping based on book ID
    const imageUrls = {
        1: 'https://i.pinimg.com/736x/ca/e6/0f/cae60f6bf68e602a0846c53cae1bf33d.jpg', // The Midnight Library
        2: 'https://i.pinimg.com/736x/87/e5/c7/87e5c7cfd4ac615afea7146203339b96.jpg', // The Silent Patient
        3: 'https://i.pinimg.com/736x/14/8c/e1/148ce17a1be95e1b98155305131d5597.jpg', // It Ends with Us
        4: 'https://i.pinimg.com/736x/15/cc/bc/15ccbcecf49d105b45a8986bc3f95f68.jpg', // Project Hail Mary
        5: 'https://i.pinimg.com/1200x/a6/3d/39/a63d392bf4e594dc521d88e1f50f072c.jpg', // The Priory of the Orange Tree
        6: 'https://i.pinimg.com/1200x/84/07/fd/8407fdea0a0bb75ce76f5604d2c95dae.jpg', // Educated
        7: 'https://i.pinimg.com/736x/44/83/8e/44838eab61b5ada3d4a078707438c076.jpg', // The Seven Husbands of Evelyn Hugo
        8: 'https://i.pinimg.com/1200x/06/cd/d3/06cdd38c3b800a256b8fc30530242dd5.jpg', // And Then There Were None
        9: 'https://i.pinimg.com/1200x/05/f5/34/05f534cdc0f541385a5d9447881398d7.jpg', // I Who Have Never Known Men
        10: 'https://i.pinimg.com/736x/fe/83/94/fe8394f709cf86ab6a94794ed4c79691.jpg', // Dune
        11: 'https://i.pinimg.com/1200x/88/bb/d9/88bbd966871636ef69bb1cf5893279e4.jpg', // The Name of the Wind
        12: 'https://i.pinimg.com/1200x/60/60/e4/6060e425541b35aa38b2c1df3989d4a8.jpg', // Steve Jobs
        13: 'https://i.pinimg.com/736x/25/b1/e7/25b1e7ab0aadd76091e084b4b450a6d0.jpg', // The Metamorphosis
        14: 'https://i.pinimg.com/736x/0b/01/50/0b0150267679e8246d22671deb37e8cd.jpg', // Dead Poets Society
        15: 'https://i.pinimg.com/736x/f4/65/c1/f465c15d86417bc9c37e0eeb9f9d130a.jpg', // Asylum
        16: 'https://i.pinimg.com/1200x/19/94/37/1994376031428450fa5c2ac09eb4149c.jpg'  // Hamlet
    };
    
    // Set up lazy loading with fallback
    const modalImageContainer = modalImage.parentElement;
    modalImageContainer.classList.add('loading');
    modalImage.style.opacity = '0'; // Start hidden for loading effect
    modalImage.onload = function() {
        modalImage.style.opacity = '1'; // Fade in when loaded
        modalImageContainer.classList.remove('loading');
    };
    modalImage.onerror = function() {
        // Fallback to BookShelfX logo if image fails to load
        modalImage.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600" fill="none"><rect width="400" height="600" fill="%23FFFDF0"/><text x="50%" y="40%" font-family="Arial" font-size="48" text-anchor="middle" fill="%233E422D">BookShelfX</text><text x="50%" y="60%" font-family="Arial" font-size="24" text-anchor="middle" fill="%23BC6C25">Digital Library</text></svg>';
        modalImage.style.opacity = '1';
        modalImageContainer.classList.remove('loading');
    };
    
    // Load the specific book image or fallback
    const bookImageUrl = book.cover || imageUrls[book.id];
    if (bookImageUrl) {
        modalImage.src = bookImageUrl;
    } else {
        // Fallback for books without specific images
        modalImage.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 600"><defs><linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:%23BC6C25" stop-opacity="1"/><stop offset="100%" style="stop-color:%233E422D" stop-opacity="1"/></linearGradient></defs><rect width="400" height="600" fill="url(%23grad)"/><text x="50%" y="50%" font-size="80" dominant-baseline="middle" text-anchor="middle" fill="white" opacity="0.3">${book.image}</text><text x="50%" y="70%" font-size="24" dominant-baseline="middle" text-anchor="middle" fill="white" font-weight="bold">${book.title.substring(0, 20)}</text></svg>';
        modalImage.style.opacity = '1';
        modalImageContainer.classList.remove('loading');
    }
    
    // Fill modal content
    document.getElementById('modalBookTitle').textContent = book.title;
    document.getElementById('modalBookAuthor').textContent = book.author;
    document.getElementById('modalBookGenre').textContent = capitalizeGenre(book.genre);
    document.getElementById('modalBookPages').textContent = book.pages;
    document.getElementById('modalBookRating').textContent = `${book.rating} ★`;
    document.getElementById('modalBookPrice').textContent = book.price.toFixed(2);
    document.getElementById('modalBookDescription').textContent = book.longDescription || book.description;
    
    // Handle reading link
    const readingLinkContainer = document.getElementById('readingLinkContainer');
    if (book.readingLink) {
        readingLinkContainer.style.display = 'block';
    } else {
        readingLinkContainer.style.display = 'none';
    }
    
    // Update borrow button
    const borrowBtn = document.getElementById('borrowBtn');
    if (borrowBtn) {
        borrowBtn.onclick = function() { borrowBook(); };
    }
    
    // Show modal with smooth transition
    modal.style.display = 'block';
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    
    // Update borrow button based on borrow status
    const isBorrowed = borrowedBooks.some(b => b.id === book.id);
    if (isBorrowed) {
        borrowBtn.textContent = 'Already Borrowed';
        borrowBtn.disabled = true;
        borrowBtn.style.opacity = '0.6';
    } else {
        borrowBtn.textContent = 'Rent Now';
        borrowBtn.disabled = false;
        borrowBtn.style.opacity = '1';
    }
}

function openReadingLink() {
    if (selectedBook && selectedBook.readingLink) {
        window.open(selectedBook.readingLink, '_blank');
    }
}

function closeModal() {
    const modal = document.getElementById('bookModal');
    modal.classList.remove('show');
    selectedBook = null;
    // Hide modal after transition completes
    setTimeout(() => {
        modal.style.display = 'none';
    }, 300);
}

// ==================== BORROW & RETURN FUNCTIONS ====================
function borrowBook() {
    if (!selectedBook) return;

    const isBorrowed = borrowedBooks.some(b => b.id === selectedBook.id);
    if (isBorrowed) {
        alert('You have already borrowed this book!');
        return;
    }

    const borrowData = {
        ...selectedBook,
        borrowDate: new Date().toISOString(),
        dueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString()
    };

    borrowedBooks.push(borrowData);
    localStorage.setItem('borrowedBooks', JSON.stringify(borrowedBooks));

    updateCartBadge();
    updateLibraryDisplay();
    closeModal();
    populateBooks(booksDatabase);

    showNotification(`"${selectedBook.title}" added to your library!`);
}

function returnBook(bookId) {
    if (confirm('Are you sure you want to return this book?')) {
        borrowedBooks = borrowedBooks.filter(b => b.id !== bookId);
        localStorage.setItem('borrowedBooks', JSON.stringify(borrowedBooks));
        
        updateCartBadge();
        updateLibraryDisplay();
        populateBooks(booksDatabase);
        
        const book = booksDatabase.find(b => b.id === bookId);
        showNotification(`"${book.title}" has been returned.`);
    }
}

// ==================== LIBRARY DISPLAY ====================
function updateLibraryDisplay() {
    const borrowedBooksContainer = document.getElementById('borrowedBooks');
    const libraryEmpty = document.getElementById('libraryEmpty');

    if (borrowedBooks.length === 0) {
        borrowedBooksContainer.innerHTML = '';
        libraryEmpty.style.display = 'block';
        return;
    }

    libraryEmpty.style.display = 'none';
    borrowedBooksContainer.innerHTML = '';

    borrowedBooks.forEach(book => {
        const borrowedDate = new Date(book.borrowDate);
        const dueDate = new Date(book.dueDate);
        const now = new Date();
        const remainingTime = dueDate - now;
        const totalTime = dueDate - borrowedDate;

        const card = document.createElement('div');
        card.className = 'borrowed-book-card';
        card.innerHTML = `
            <h3 class="borrowed-book-title">${book.title}</h3>
            <p class="borrowed-book-author">by ${book.author}</p>
            
            <div class="countdown-container">
                <p class="countdown-label">Time Remaining:</p>
                <div class="countdown-timer" id="countdown-${book.id}">
                    ${formatTimeRemaining(remainingTime)}
                </div>
                <p class="time-status ${getTimeStatusClass(remainingTime)}">
                    Due: ${dueDate.toLocaleDateString()} at ${dueDate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                </p>
            </div>

            <div class="progress-bar">
                <div class="progress-fill" id="progress-${book.id}" style="width: ${Math.max(0, (remainingTime / totalTime) * 100)}%"></div>
            </div>

            <button class="btn btn-secondary return-button" onclick="returnBook(${book.id})">Return Book</button>
        `;

        borrowedBooksContainer.appendChild(card);
    });
    // Inside your displayBooks function where cards are created:
function displayBooks(books) {
    const catalogGrid = document.getElementById('catalogGrid');
    if (!catalogGrid) return;
    
    catalogGrid.innerHTML = books.map(book => `
        <div class="book-card" onclick="openBookDetails(${book.id})">
            <div class="book-badge">${book.format}</div>
            <div class="book-image">${book.image}</div>
            <div class="book-info">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">By ${book.author}</p>
                <div class="book-meta">
                    <span class="book-price">$${book.price}</span>
                    <span class="book-rating">⭐ ${book.rating}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Add this function to handle the detailed view
function openBookDetails(bookId) {
    const book = booksDatabase.find(b => b.id === bookId);
    if (!book) return;

    // Fill the modal with detailed info
    document.getElementById('modalBookTitle').innerText = book.title;
    document.getElementById('modalBookAuthor').innerText = book.author;
    document.getElementById('modalBookGenre').innerText = book.genre;
    document.getElementById('modalBookPages').innerText = book.pages;
    document.getElementById('modalBookDescription').innerText = book.description;
    document.getElementById('modalBookImage').src = ""; // If you use URLs
    // Since you use Emojis/Icons in your DB:
    document.getElementById('modalBookImage').parentElement.innerHTML = `<div style="font-size: 8rem; text-align: center;">${book.image}</div>`;

    // Show the modal
    document.getElementById('bookModal').style.display = 'block';
}
}

// ==================== COUNTDOWN UPDATER ====================
function startCountdownUpdater() {
    setInterval(() => {
        borrowedBooks.forEach(book => {
            const dueDate = new Date(book.dueDate);
            const borrowDate = new Date(book.borrowDate);
            const now = new Date();
            const remainingTime = dueDate - now;
            const totalTime = dueDate - borrowDate;

            const countdownElement = document.getElementById(`countdown-${book.id}`);
            const progressElement = document.getElementById(`progress-${book.id}`);
            const statusElements = document.querySelectorAll(`[id^="time-status-${book.id}"]`);

            if (countdownElement) {
                countdownElement.textContent = formatTimeRemaining(remainingTime);
            }

            if (progressElement) {
                progressElement.style.width = Math.max(0, (remainingTime / totalTime) * 100) + '%';
            }

            // Update status color if needed
            if (remainingTime <= 0) {
                if (countdownElement) {
                    countdownElement.style.color = '#ef4444';
                    countdownElement.textContent = 'EXPIRED';
                }
                // Auto-return expired books
                borrowedBooks = borrowedBooks.filter(b => b.id !== book.id);
                localStorage.setItem('borrowedBooks', JSON.stringify(borrowedBooks));
                updateLibraryDisplay();
            }
        });
    }, 1000);
}

// ==================== FILTER & SORT ====================
function filterAndSortBooks() {
    const genre = document.getElementById('genre-filter')?.value || '';
    const sort = document.getElementById('sort-filter').value;
    const search = document.getElementById('search-input').value.toLowerCase();

    let filtered = booksDatabase.filter(book => {
        const matchesGenre = !genre || book.genre === genre;
        const matchesSearch = !search || 
            book.title.toLowerCase().includes(search) ||
            book.author.toLowerCase().includes(search);
        return matchesGenre && matchesSearch;
    });

    // Sort books
    filtered.sort((a, b) => {
        switch (sort) {
            case 'title':
                return a.title.localeCompare(b.title);
            case 'author':
                return a.author.localeCompare(b.author);
            case 'newest':
                return b.id - a.id;
            default:
                return 0;
        }
    });

    populateBooks(filtered);
}

// Advanced sidebar filters
function filterBooks() {
    const selectedCategories = Array.from(document.querySelectorAll('.category-filter:checked'))
        .map(cb => cb.value)
        .filter(v => v !== '');
    
    const selectedFormats = Array.from(document.querySelectorAll('.format-filter:checked'))
        .map(cb => cb.value)
        .filter(v => v !== '');
    
    const selectedPrices = Array.from(document.querySelectorAll('.price-filter:checked'))
        .map(cb => cb.value)
        .filter(v => v !== '');
    
    const selectedRatings = Array.from(document.querySelectorAll('.rating-filter:checked'))
        .map(cb => cb.value)
        .filter(v => v !== '');

    let filtered = booksDatabase.filter(book => {
        // Category filter
        const matchCategory = selectedCategories.length === 0 || selectedCategories.includes(book.genre);
        
        // Format filter
        const matchFormat = selectedFormats.length === 0 || selectedFormats.includes(book.format);
        
        // Price filter
        let matchPrice = selectedPrices.length === 0;
        if (!matchPrice && selectedPrices.length > 0) {
            matchPrice = selectedPrices.some(range => {
                if (range === 'under-1000') return book.price * 92 < 1000;
                if (range === '1000-1500') return book.price * 92 >= 1000 && book.price * 92 <= 1500;
                if (range === 'over-1500') return book.price * 92 > 1500;
                return false;
            });
        }
        
        // Rating filter
        const matchRating = selectedRatings.length === 0 || selectedRatings.some(r => book.rating >= parseInt(r));
        
        return matchCategory && matchFormat && matchPrice && matchRating;
    });

    populateBooks(filtered);
}

function resetAllFilters() {
    // Reset all checkboxes
    document.querySelectorAll('.category-filter, .format-filter, .price-filter, .rating-filter').forEach(cb => {
        cb.checked = cb.value === '';
    });
    
    // Repopulate with all books
    populateBooks(booksDatabase);
}

// ==================== AUTHORS SECTION ====================
function populateAuthors() {
    const authorsGrid = document.getElementById('authorsGrid');
    authorsGrid.innerHTML = '';

    authorsDatabase.forEach(author => {
        const card = document.createElement('div');
        card.className = 'author-card';
        card.innerHTML = `
            <div class="author-avatar">
                <img src="${author.image}" alt="${author.name}">
            </div>
            <h3 class="author-name">${author.name}</h3>
            <p class="author-info">${author.description}</p>
            <p class="author-books">${author.books} Books Published</p>
        `;
        authorsGrid.appendChild(card);
    });
}

// ==================== UTILITY FUNCTIONS ====================
function capitalizeGenre(genre) {
    const genreMap = {
        'fiction': 'Fiction',
        'mystery': 'Mystery',
        'romance': 'Romance',
        'science': 'Science Fiction',
        'fantasy': 'Fantasy',
        'biography': 'Biography'
    };
    return genreMap[genre] || genre;
}

function formatTimeRemaining(milliseconds) {
    if (milliseconds <= 0) return 'Time Expired';

    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor((milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((milliseconds % (1000 * 60)) / 1000);

    if (days > 0) {
        return `${days}d ${hours}h ${minutes}m`;
    } else if (hours > 0) {
        return `${hours}h ${minutes}m ${seconds}s`;
    } else {
        return `${minutes}m ${seconds}s`;
    }
}

function getTimeStatusClass(remainingTime) {
    const daysRemaining = remainingTime / (1000 * 60 * 60 * 24);
    if (daysRemaining <= 1) return 'critical';
    if (daysRemaining <= 3) return 'warning';
    return '';
}

function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    badge.textContent = borrowedBooks.length;
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #606c38 0%, #bc6c25 100%);
        color: #fefae0;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(96, 108, 56, 0.4);
        z-index: 3000;
        animation: slideInRight 0.3s ease-out;
        max-width: 300px;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-in';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// Add animation styles dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ==================== LOGIN & AUTHENTICATION ====================
function openLoginModal() {
    const modal = document.getElementById('loginModal');
    modal.style.display = 'block';
    setTimeout(() => modal.classList.add('show'), 10);
}

function closeLoginModal() {
    const modal = document.getElementById('loginModal');
    modal.classList.remove('show');
    setTimeout(() => modal.style.display = 'none', 300);
}

function switchLoginTab(tab) {
    const signinForm = document.getElementById('signinForm');
    const signupForm = document.getElementById('signupForm');
    const tabs = document.querySelectorAll('.login-tab-btn');

    tabs.forEach(t => t.classList.remove('active'));
    signinForm.classList.remove('active-form');
    signupForm.classList.remove('active-form');

    if (tab === 'signin') {
        tabs[0].classList.add('active');
        signinForm.classList.add('active-form');
    } else {
        tabs[1].classList.add('active');
        signupForm.classList.add('active-form');
    }
}

function handleSignIn() {
    const email = document.getElementById('signin-email').value;
    const password = document.getElementById('signin-password').value;
    const rememberMe = document.getElementById('remember-me').checked;

    if (!email || !password) {
        showNotification('Please enter email and password');
        return;
    }

    // Store user session
    const userSession = {
        email: email,
        name: email.split('@')[0],
        loginTime: new Date().toISOString(),
        rememberMe: rememberMe
    };

    localStorage.setItem('userSession', JSON.stringify(userSession));
    
    showNotification(`Welcome back, ${userSession.name}!`);
    closeLoginModal();
    updateNavbarAfterLogin(userSession.name);
}

function handleSignUp() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirm = document.getElementById('signup-confirm').value;
    const agreeTerms = document.getElementById('agree-terms').checked;

    if (!name || !email || !password || !confirm) {
        showNotification('Please fill all fields');
        return;
    }

    if (password !== confirm) {
        showNotification('Passwords do not match');
        return;
    }

    if (!agreeTerms) {
        showNotification('Please agree to Terms and Conditions');
        return;
    }

    // Store new user session
    const userSession = {
        email: email,
        name: name,
        loginTime: new Date().toISOString(),
        rememberMe: true
    };

    localStorage.setItem('userSession', JSON.stringify(userSession));
    
    showNotification(`Welcome, ${name}! Account created successfully!`);
    closeLoginModal();
    updateNavbarAfterLogin(name);
}

function resetPassword() {
    const email = document.getElementById('signin-email').value;
    if (!email) {
        showNotification('Please enter your email first');
        return;
    }
    showNotification(`Password reset link sent to ${email}`);
}

function socialLogin(provider) {
    showNotification(`Signing in with ${provider.toUpperCase()}...`);
    
    setTimeout(() => {
        const userSession = {
            email: `user@${provider}.com`,
            name: `${provider} User`,
            loginTime: new Date().toISOString(),
            provider: provider,
            rememberMe: true
        };

        localStorage.setItem('userSession', JSON.stringify(userSession));
        closeLoginModal();
        updateNavbarAfterLogin(userSession.name);
        showNotification(`Successfully signed in with ${provider}!`);
    }, 1500);
}

function checkUserLogin() {
    const userSession = localStorage.getItem('userSession');
    if (userSession) {
        const user = JSON.parse(userSession);
        updateNavbarAfterLogin(user.name);
    }
}

function updateNavbarAfterLogin(userName) {
    const loginBtn = document.querySelector('.btn-login');
    if (loginBtn) {
        loginBtn.innerHTML = `
            <svg class="login-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
            </svg>
            ${userName}
        `;
        loginBtn.onclick = logout;
    }
}

function logout() {
    localStorage.removeItem('userSession');
    showNotification('You have been logged out');
    location.reload();
}

// ==================== LOCATION PERMISSION ====================
function checkLocationPermission() {
    const locationAccepted = localStorage.getItem('locationPermission');
    const firstVisit = localStorage.getItem('firstVisit');

    if (!locationAccepted && !firstVisit) {
        localStorage.setItem('firstVisit', 'true');
        setTimeout(() => {
            openLocationModal();
        }, 2000);
    }
}

function openLocationModal() {
    const modal = document.getElementById('locationModal');
    if (modal) modal.style.display = 'block';
}

function closeLocationModal() {
    const modal = document.getElementById('locationModal');
    if (modal) modal.style.display = 'none';
}

function requestLocation() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                localStorage.setItem('locationPermission', 'granted');
                localStorage.setItem('userLocation', JSON.stringify({
                    latitude,
                    longitude,
                    timestamp: new Date().toISOString()
                }));
                
                showNotification('Location access granted! Finding nearby libraries...');
                closeLocationModal();
            },
            (error) => {
                showNotification('Location access denied. You can enable it in settings.');
                localStorage.setItem('locationPermission', 'denied');
                closeLocationModal();
            }
        );
    } else {
        showNotification('Geolocation is not supported by your browser');
    }
}

function denyLocation() {
    localStorage.setItem('locationPermission', 'denied');
    showNotification('You can enable location access anytime in settings');
    closeLocationModal();
}

// ==================== PRICING FUNCTIONS ====================
function handlePlanSelection(plan) {
    const plans = {
        free: { name: 'Free', price: '$0', period: '/mo' },
        pro: { name: 'Pro', price: '$9.99', period: '/mo' },
        premium: { name: 'Premium', price: '$19.99', period: '/mo' }
    };

    const selectedPlan = plans[plan];
    if (selectedPlan) {
        // Check if user is logged in
        const userSession = JSON.parse(localStorage.getItem('userSession') || 'null');
        
        if (!userSession) {
            // Show login modal if not logged in
            openLoginModal();
            showNotification('Please sign in to select a plan');
        } else {
            // Update user plan
            userSession.plan = plan;
            userSession.planName = selectedPlan.name;
            localStorage.setItem('userSession', JSON.stringify(userSession));
            showNotification(`Successfully upgraded to ${selectedPlan.name} plan!`);
        }
    }
}

