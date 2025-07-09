import LayoutBox from "./LayoutBox"


function EventPropagation() {

    const handleClick = (color:string) => {
        
        return (e:React.MouseEvent<HTMLDivElement>) => {
            // 이벤트 버블링 막아주기
            e.stopPropagation();
            console.log(color, e.target)
        }
    }

    return (
        <details>
            <summary>
                <b>이벤트 전파 & 기본 동작 방지</b>
            </summary>
            <LayoutBox onClick={handleClick('yellow')} style={styles.yellow} title="레이아웃 박스" >
                <LayoutBox onClick={handleClick('magenta')} style={styles.magenta}>
                    <LayoutBox onClick={handleClick('cyan')} style={styles.cyan}></LayoutBox>
                </LayoutBox>
            </LayoutBox>
        </details>
    )
}

export default EventPropagation


const styles = {
    cyan: {'--color' : 'var(--cyan)'},
    magenta: {'--color' : 'var(--magenta)'},
    yellow: {'--color' : 'var(--yellow)'},
}