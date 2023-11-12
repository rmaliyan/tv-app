function MenuItem({ src, title, selected}) {
  return (
    <div  className={("flex items-center pl-[1.625rem] w-20 h-20 rounded-full group-hover:transition-all group-hover:ease-in-out  group-hover:delay-500 group-hover:rounded-xl group-hover:w-80 " + (selected ? "bg-[#232A3F]  group-hover:bg-[#3B486D]" : "bg-transparent"))} >
      <img className="" src={src} />
      <div className="pl-10 text-white hidden overflow-clip group-hover:block">
        {title}
      </div>
    </div>
  );
}

const menuItemsList = [
  {
    src: "/icons/ICON-Search.png",
    title: "Search",
    selected: false,
    url: "",
  },
  {
    src: "/icons/Group-46.png",
    title: "Home",
    selected: true,
    url: "",
  },
  {
    src: "/icons/Group-56.png",
    title: "TV Shows",
    url: "",
  },
  {
    src: "/icons/Group-54.png",
    title: "Movies",
    selected: false,
    url: "",
  },
  {
    src: "/icons/Group-53.png",
    title: "Genes",
    selected: false,
    url: "",
  },
  {
    src: "/icons/Group-47.png",
    title: "Watch Later",
    selected: false,
    url: "",
  },
];

export function Menu() {
  return (
    <div className="transition-all ease-in-out delay-500 z-50 absolute pl-10 flex items-center w-40 h-screen bg-transparent group hover:w-4/5 hover:bg-gradient-to-r hover:from-black">
      <div className="flex items-center justify-center py-5 flex-col">
        {menuItemsList.map((element, index) => {
          return (
            <MenuItem
              src={element.src}
              selected = {element.selected}
              title={element.title}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
