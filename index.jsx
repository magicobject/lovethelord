import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import './src/index.css';

const BookletApp = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    {
      title: "How to Love the Lord Your God",
      subtitle: "with all your heart, soul, mind and strength",
      verse: "'You shall love the Lord your God with all your heart, with all your soul, with all your strength, and with all your mind,' and 'your neighbour as yourself.'",
      reference: "Luke 10:27",
      type: "cover",
      image: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=800&q=80"
    },
    {
      title: "Introduction",
      content: [
        "Many of us who have been Christians for a long time still struggle with loving God with all our heart let alone soul, mind and strength. We know we should love God with every fibre of our being, but in practice, if we're honest with ourselves, we don't. Not really. We're at best lukewarm.",
        "If this sounds anything like you then you've come to the right place. Our roadmap will be to discover what blocks our hearts, how to identify those blocks and practical steps to enable Jesus to fully indwell in our hearts.",
        "I expect the results to be life changing. Loving the Lord with all our hearts is foundational. Once that foundation is in place the possibilities for transformation, holiness and God's coming kingdom are limitless."
      ],
      image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?w=800&q=80"
    },
    {
      title: "Truly Loving God is Not Easy",
      content: [
        "The first thing to acknowledge is that from the outside, truly loving God can be extremely difficult and may appear impossible. If we're going to fulfil this greatest commandment, we're going to have to understand our hearts and be willing to change.",
        "The good news is that God is more than willing and able to help us and that deep change is possible and only takes active willingness on our part."
      ],
      verse: "Create in me a pure heart, O God, and renew a steadfast spirit within me",
      reference: "Psalm 51:10",
      image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "God's Love for Us",
      content: [
        "Our love for God is in response to God's love for us.",
        "We need to get into our hearts and minds the amazing extent of God's love for us. He loves us so much that he was prepared in his son to come to earth in human form, live a perfect life, and even though he was despised, scorned and rejected he still loved us so much that he went to the cross and bares our sins.",
        "The Father loves you with the same love he has for Jesus."
      ],
      verse: "Then the world will know that you sent me and have loved them even as you have loved me.",
      reference: "John 17:23",
      image: "https://images.unsplash.com/photo-1464852045489-bccb7d17fe39?w=800&q=80"
    },
    {
      title: "Love Starts with the Heart",
      content: [
        "Love is a choice. Love without choice would be meaningless. For example, when people get married, they promise, not that they do love each other, but that they choose to love one another come what may.",
        "Love is a choice to put another first in our heart, and our love for God starts with the heart. If God is not fully in our heart, how could we possibly love him with all our mind, soul or strength?"
      ],
      image: "https://images.unsplash.com/photo-1516450137517-162bfbeb8dba?w=800&q=80"
    },
    {
      title: "All Your Heart",
      content: [
        "God's greatest commandment is deliberately not half-hearted. There can be no place in our hearts for God and your favourite idol. Like Jesus' words on the love of money, no one can serve two masters—you have to love one or the other.",
        "If we hold God and sin in our hearts at the same time, we will not be able to overcome sin. We are called to be like God (holy) and that is only possible if we wholeheartedly love God.",
        "If we wholeheartedly love God, then that must overflow into wholeheartedly loving other people."
      ],
      image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80"
    },
    {
      title: "The Heart is Deceitful",
      content: [
        "Jeremiah warns us that the heart is deceitful. We may think there's nothing we wouldn't gladly give up for the Lord, but sometimes we discover our hearts have deceived us.",
        "We must examine ourselves closely and honestly, being aware of how deceitful our hearts can be. Sometimes we discover we love things more than we realized."
      ],
      verse: "The heart is deceitful above all things and beyond cure. Who can understand it?",
      reference: "Jeremiah 17:9",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
    },
    {
      title: "What's in My Heart?",
      content: [
        "For some their heart is full of the love of money or power or control. Others are controlled by alcohol or drugs. For many it is lust through use of pornography or fornication.",
        "But for others it can be too much of any good thing. For example, it is possible to love people or things too much. That may be a relationship or a possession like a house or car.",
        "These things are idols, and they totally get in the way of wholeheartedly loving God."
      ],
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800&q=80"
    },
    {
      title: "Identifying Our Idols",
      content: [
        "Our idols are our 'ultimate things': we can discover our idols because if they are threatened or taken away, they make us feel extremely anxious or angry.",
        "They are anything in our heart that is competing for the place of God. Sometimes our idols consume our thinking.",
        "What things do you think about most? How would you respond if those things were threatened or taken away? Could those things be your idols?"
      ],
      image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=80"
    },
    {
      title: "Idols Never Satisfy",
      content: [
        "One thing is for sure: idols can never satisfy. The heart which craves money will never be filled by money. The heart which lusts will never be satisfied.",
        "Consider Solomon's pursuit of satisfaction through wisdom, pleasure, work, and wealth—all ending with 'meaningless, a chasing after the wind.' He concluded that meaning is found only in God.",
        "Saint Augustine said: 'You have made us for yourself, O Lord, and our hearts are restless until they rest in you.'"
      ],
      image: "https://images.unsplash.com/photo-1475319122043-5ca9eeceefaf?w=800&q=80"
    },
    {
      title: "The Jesus-Shaped Hole",
      content: [
        "We are told in Genesis that we were made by God for fellowship and relationship with God. But after humanity sinned that relationship was completely broken.",
        "Sin broke humanity's intimate personal relationship with God, leaving us all with a God-shaped hole in our hearts. Before we know God, we feel that something is missing.",
        "Nothing we put in our hearts seems to ultimately and permanently satisfy. Only Jesus can properly fill that hole."
      ],
      image: "https://images.unsplash.com/photo-1502139214982-d0ad755818d8?w=800&q=80"
    },
    {
      title: "When Jesus Fills Your Heart",
      content: [
        "If Jesus were to fill that hole in our hearts, we would again have a sense of completeness. We would be back in that perfect relationship which is the only thing that can truly satisfy us.",
        "Our heart has a Jesus-shaped hole. Only placing Jesus there will truly satisfy or make us complete. Nothing else will satisfy. We were never intended for life without God in our hearts."
      ],
      verse: "A good man brings good things out of the good stored up in his heart. For the mouth speaks what the heart is full of.",
      reference: "Luke 6:45",
      image: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&q=80"
    },
    {
      title: "What to Do",
      content: [
        "We often tell new believers to invite Jesus into their hearts. Sadly, that's not enough. Jesus must absolutely fill our hearts. He must be our ultimate thing.",
        "Compared to him filling our hearts, our sins and idols are useless, unsatisfying and meaningless.",
        "We need to constantly ask Jesus, not only into our hearts but to fill the Jesus-shaped hole in our hearts. That relationship with Jesus needs to become our ultimate possession."
      ],
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80"
    },
    {
      title: "What to Expect",
      content: [
        "Jesus filling our hearts is not like a drug rush followed by emptiness. Loving Jesus is about giving us a secure base, a solid foundation which does not shift.",
        "The security of our place in Christ brings peace and peace brings joy and inner contentment. Jesus takes away our anxieties as in faith we cast our cares on him.",
        "Filling our hearts with love for Jesus enables us to overcome sin, because compared to him all sin is worthless. Jesus is our greatest treasure."
      ],
      verse: "You will keep him in perfect peace, whose mind is stayed on You, because he trusts in You",
      reference: "Isaiah 26:3",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
    },
    {
      title: "Making Lasting Change",
      content: [
        "Unless Jesus fills our hearts, sin will certainly bite us again and again. We may think we can overcome sin on our own but sooner or later our idols resurface.",
        "Make God your ultimate thing. Ask Him hour by hour not only into your heart but to fill your heart. Love Him with all your heart. There will be no space left for sin.",
        "Look to Him to be your satisfaction. Guard your heart so you never look for satisfaction elsewhere."
      ],
      verse: "Sin is crouching at your door; it desires to have you, but you must rule over it",
      reference: "Genesis 4:7",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80"
    },
    {
      title: "Love Comes Before Repentance",
      content: [
        "If we think we've repented but don't fully love God, then our sin will eventually resurface. But if love for Jesus is the ultimate possession of our hearts, then sin won't stand a chance.",
        "Take the woman caught in adultery in John 8. Jesus showed her accusers the hypocrisy in their hearts. Imagine how she felt about Jesus after he saved her from being stoned.",
        "She was able to truly repent because she had found a love of much greater value than her sin."
      ],
      image: "https://images.unsplash.com/photo-1518281361980-b26bfd556770?w=800&q=80"
    },
    {
      title: "True Repentance",
      content: [
        "You can't repent if you still harbour sin in your heart. You need something bigger and better there to drive sin out.",
        "Jesus is the only thing that will truly satisfy your heart. Ask him to continuously fill the Jesus-shaped hole in your heart and be your one ultimate thing.",
        "For some this is a process and can feel like climbing a ladder as love for God overwhelms one thing at a time."
      ],
      verse: "Above all else, guard your heart, for everything you do flows from it.",
      reference: "Proverbs 4:23",
      image: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80"
    },
    {
      title: "Conclusion",
      content: [
        "As a result of the fall, we are all born with a Jesus-shaped hole in our hearts where our loving intimate relationship with God used to be.",
        "Ask Jesus not only to fully fill that hole in your heart, but to be your ultimate possession, and to drive out all idols. Due to the fickleness of the human heart, make that your prayer daily if not hourly.",
        "If Jesus fills your heart, you see him and the Bible in an entirely new light. The overflow of the Jesus-filled heart is gracious and loving.",
        "True repentance is only possible if Jesus is filling your heart and that love for God is driving out all idols."
      ],
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&q=80"
    }
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const page = pages[currentPage];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Main Book Container */}
        <div className="relative bg-white rounded-lg shadow-2xl overflow-hidden" style={{ minHeight: '600px' }}>
          {/* Page Content */}
          <div className="relative h-full">
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: `url(${page.image})` }}
            />
            
            {/* Content Overlay */}
            <div className="relative z-10 p-8 md:p-12 h-full flex flex-col">
              {page.type === 'cover' ? (
                // Cover Page Design
                <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6">
                  <Heart className="w-16 h-16 text-purple-600 mb-4" />
                  <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-800 leading-tight">
                    {page.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-600 italic max-w-2xl">
                    {page.subtitle}
                  </p>
                  <div className="mt-8 p-6 bg-purple-50 rounded-lg max-w-2xl">
                    <p className="text-lg text-gray-700 italic leading-relaxed">
                      "{page.verse}"
                    </p>
                    <p className="text-sm text-purple-600 mt-3 font-semibold">
                      — {page.reference}
                    </p>
                  </div>
                </div>
              ) : (
                // Content Pages Design
                <div className="flex-1 flex flex-col">
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800 mb-6">
                    {page.title}
                  </h2>
                  
                  <div className="flex-1 space-y-4 text-gray-700 leading-relaxed overflow-y-auto">
                    {page.content.map((paragraph, idx) => (
                      <p key={idx} className="text-base md:text-lg">
                        {paragraph}
                      </p>
                    ))}
                    
                    {page.verse && (
                      <div className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400 rounded">
                        <p className="italic text-gray-700">
                          "{page.verse}"
                        </p>
                        <p className="text-sm text-purple-600 mt-2 font-semibold">
                          — {page.reference}
                        </p>
                      </div>
                    )}
                  </div>
                  
                  {/* Page Number */}
                  <div className="text-center text-sm text-gray-400 mt-4">
                    {currentPage + 1}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
            <button
              onClick={prevPage}
              disabled={currentPage === 0}
              className={`p-3 rounded-full shadow-lg transition-all ${
                currentPage === 0
                  ? 'bg-gray-300 text-gray-400 cursor-not-allowed'
                  : 'bg-purple-600 text-white hover:bg-purple-700 hover:scale-110'
              }`}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-1">
              {pages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentPage(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    idx === currentPage
                      ? 'bg-purple-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextPage}
              disabled={currentPage === pages.length - 1}
              className={`p-3 rounded-full shadow-lg transition-all ${
                currentPage === pages.length - 1
                  ? 'bg-gray-300 text-gray-400 cursor-not-allowed'
                  : 'bg-purple-600 text-white hover:bg-purple-700 hover:scale-110'
              }`}
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-white text-sm">
          Use arrow keys or click buttons to navigate • {currentPage + 1} of {pages.length}
        </div>
      </div>
    </div>
  );
};

// Create root and render the app
const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BookletApp />
  </React.StrictMode>
);