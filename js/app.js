const members = [
  { 
    id: 1, 
    name: "WE WANT", 
    profileImgs: [
      "images/hyun5.jpg", 
      "images/hyun6.jpg", 
      "images/hyun7.jpg"
    ], 
    detailImg: "images/hyun-pro1.jpg", 
    bio: "상현이가 생각한 싱현의 이미지는 착한 아이" 
  },
  { 
    id: 2, 
    name: "CHUNG SANG HYEON'S", 
    profileImgs: [
      "images/hyun1.jpg", 
      "images/hyun2.jpg"
    ], 
    detailImg: "images/hyun-pro2.jpg", 
    bio: "상현이가 연습하며 생긴 습관은 P에서 J로!!" 
  },
  { 
    id: 3, 
    name: "DEBUT", 
    profileImgs: [
      "images/hyun21.jpg", 
      "images/hyun22.jpg"
    ], 
    detailImg: "images/hyun-pro3.jpg", 
    bio: "상현이가 도전하고 싶은 무대 컨셉은 뭐든지!!" 
  },
  { 
    id: 4, 
    name: "A.K.A SWICY", 
    profileImgs: [
      "images/hyun3.jpg", 
      "images/hyun4.jpg"
    ], 
    detailImg: "images/hyun-pro4.jpg", 
    bio: "상현이가 생각한 상현이의 최대 강점은 비주얼...?" 
  },
  { 
    id: 5, 
    name: "정상현", 
    profileImgs: [
      "images/hyun17.jpg", 
      "images/hyun18.jpg"
    ], 
    detailImg: "images/hyun-pro5.jpg", 
    bio: "여러분들의 마음에 ALL TIME 0순위가 되겠습니다!" 
  },
  { 
    id: 6, 
    name: "CHUNG SANG HYEON", 
    profileImgs: [
      "images/hyun10.jpg", 
      "images/hyun11.jpg",
      "images/hyun12.jpg"
    ], 
    detailImg: "images/hyun-pro6.jpg", 
    bio: "과거 지원서 쓰던 상현이에게 한마디 앞으로 화이팅...!" 
  },
  { 
    id: 7, 
    name: "#0순위개냥이", 
    profileImgs: [
      "images/hyun23.jpg", 
      "images/hyun24.jpg"
    ], 
    detailImg: "images/hyun-pro7.jpg", 
    bio: "지금 상현이에게 힘이 되는 한마디는 이 순간만 버텨내보자 LET'S GO!!" 
  },
  { 
    id: 8, 
    name: "#최애의상현", 
    profileImgs: [
      "images/hyun8.jpg", 
      "images/hyun9.jpg"
    ], 
    detailImg: "images/hyun-pro8.jpg", 
    bio: "미래 파이널을 앞둔 상현이에게 한마디 그냥 하는 거야!!" 
  },
  { 
    id: 9, 
    name: "#비주얼 ON THE TOP!!", 
    profileImgs: [
      "images/hyun15.jpg", 
      "images/hyun16.jpg"
    ], 
    detailImg: "images/hyun-pro9.jpg", 
    bio: "저에게 주어진 이 소중한 기회를 저를 응원해주시고 사랑해주시는 여러분들과 함께하고 싶습니다!!" 
  }
];

// 스크롤 등장 훅
function useScrollAnimation() {
  const [visible, setVisible] = React.useState(false);
  const ref = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if(ref.current) observer.unobserve(ref.current); };
  }, []);

  return [ref, visible];
}

// 카드
function MemberCard({ member, onClick }) {
  const [ref, visible] = useScrollAnimation();
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    if (!member.profileImgs || member.profileImgs.length === 0) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % member.profileImgs.length);
    }, 3000); // 3초마다 변경
    return () => clearInterval(interval);
  }, [member.profileImgs.length]);

  return React.createElement(
    "div",
    {
      ref: ref,
      className: `bg-white rounded-lg shadow-md p-4 sm:p-6 text-center cursor-pointer transform transition duration-500 ${
        visible ? "animate-fadeInUp" : "opacity-0"
      }`,
      onClick: () => onClick(member)
    },
    React.createElement("img", {
      src: member.profileImgs[index],
      alt: member.name,
      loading: "lazy",
      className: "w-52 h-72 mx-auto rounded-lg object-cover transition duration-700 ease-in-out"
    }),
    React.createElement("h2", {
      className: "text-lg sm:text-xl font-semibold mt-2",
      style: { fontFamily: "Sequel100Black, sans-serif" }
    }, member.name)
  );
}

// SNS 아이콘 섹션
function SocialSection() {
  const [ref, visible] = useScrollAnimation();
  return React.createElement(
    "div",
    { ref: ref, className: `mt-12 flex justify-center space-x-6 opacity-0 transform translate-y-10 transition duration-700 ${visible ? "opacity-100 translate-y-0" : ""}` },
    React.createElement("a", { href: "https://youtube.com/@boysplanet.official?si=uWoML6FSkZG1qDg1", target: "_blank", rel: "noopener noreferrer" },
      React.createElement("img", { src: "images/youtube.png", alt: "YouTube", className: "w-8 h-8 sm:w-10 sm:h-10 hover:scale-125 transition transform duration-300" })
    ),
    React.createElement("a", { href: "https://www.instagram.com/boysplanet.official?igsh=MXJpYzVjeGljdzVyeg==", target: "_blank", rel: "noopener noreferrer" },
      React.createElement("img", { src: "images/instagram.png", alt: "Instagram", className: "w-8 h-8 sm:w-10 sm:h-10 hover:scale-125 transition transform duration-300" })
    ),
    React.createElement("a", { href: "https://x.com/_mnetboysplanet?s=21", target: "_blank", rel: "noopener noreferrer" },
      React.createElement("img", { src: "images/x.png", alt: "X", className: "w-8 h-8 sm:w-10 sm:h-10 hover:scale-125 transition transform duration-300" })
    )
  );
}

// 메인 앱
function App() {
  const [selectedMember, setSelectedMember] = React.useState(null);
  const handleCloseModal = () => setSelectedMember(null);

  return React.createElement(
    "div",
    { className: "container mx-auto p-4" },

    // 제목 (왼쪽 상단 고정)
    React.createElement("h1", {
      className: "text-2xl sm:text-3xl font-bold mb-6 fixed top-4 left-4 z-50",
      style: { fontFamily: "Sequel100Black, sans-serif" }
    }, "CHUNG SANG HYEON"),

    // 카드 그리드
    React.createElement(
      "div",
      { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16" },
      members.map(member =>
        React.createElement(MemberCard, { key: member.id, member: member, onClick: setSelectedMember })
      )
    ),

    React.createElement(SocialSection),

    // 모달
selectedMember &&
React.createElement("div", {
  className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
  onClick: handleCloseModal
},
  React.createElement("div", {
    className: "bg-white p-6 rounded-lg w-11/12 max-w-md relative animate-fadeInModal",
    onClick: e => e.stopPropagation()
  },
    React.createElement("button", { className: "absolute top-2 right-2 text-gray-500", onClick: handleCloseModal }, "X"),
    React.createElement("img", { src: selectedMember.detailImg, alt: selectedMember.name, className: "w-full h-72 mx-auto rounded-lg object-cover" }),
    React.createElement("h2", {
      className: "text-2xl sm:text-3xl font-bold mt-4 text-center",
      style: { fontFamily: "Sequel100Black, sans-serif" }
    }, selectedMember.name),
    React.createElement("p", { className: "mt-2 text-gray-600 text-center text-sm sm:text-base" }, selectedMember.bio)
  )
)
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));
