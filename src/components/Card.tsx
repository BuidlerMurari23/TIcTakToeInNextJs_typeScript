import Icon from "./Icon";

type CardProps = {
    player: string,
    index: number,
    endGame: (string | null),
    onPlay: (index: number) => void
}

function Card({player, index, onPlay, endGame}:CardProps){

    let icon = <Icon name="" />

    if (player == "O"){
        icon = <Icon name="circle" />
    }else if (player == "X"){
        icon = <Icon name="cross" />
    }
    return(
        <div>
            <div 
            onClick={() => !endGame && player == "" && onPlay(index)}
            className="h-[120px] w-[120px] rounded-xl bg-[#ffc109] flex items-center justify-center text-black ">
                {icon}
            </div>
        </div>
    )
}

export default Card;