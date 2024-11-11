function Nav2(props) {
    console.log(props);
    // 배열이름.map((item, index) => (반복코드))
    return (
        <ul className="flex gap-4">
            {props.nav.map((item, index) => (
                <li key={index}>
                    <a href={item.url} className="h-16 flex items-center">
                        {item.title}
                    </a>
                </li>
            ))}
        </ul>
    );
}

export default Nav2;
