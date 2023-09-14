function CarouseItem(props) {
    return (
        <div className="m-1 shadow" style={{
            height: "200px",
            borderRadius: "10px",
            backgroundImage: `url("https://fakeimg.pl/300x300/${props.bgColor}/ffffff")`,
            backgroundSize: "cover",
            backgroundPosition: "center"
        }}>{props.title}
        </div>
    );
}

export default CarouseItem;
