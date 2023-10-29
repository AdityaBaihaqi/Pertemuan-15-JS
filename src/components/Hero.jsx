import styled from "styled-components"

function Hero(){
    const title = [
        'Nama Lengkap',
        'Asal',
        'Umur',
        'Status'
    ]

    const user = [
        'Mohammad Aditya Baihaqi',
        'Mojokerto',
        '19 tahun',
        'Mahasantri'
    ]

    const TitleText = styled.h5`
        font-style: Times New Roman;
        font-size: 20px;
    `

    const MainText = styled.h3`
        font-style: Times New Roman;
        font-size: 20px;
        background-color: white;
        margin: 100px;
        padding: 15px;
        border-radius: 10px;
    `

    return (
        <>
            <div>
                <TitleText>{title[0]}</TitleText>
                <MainText>{user[0]}</MainText> <br />

                <TitleText>{title[1]}</TitleText>
                <MainText>{user[1]}</MainText> <br />

                <TitleText>{title[2]}</TitleText>
                <MainText>{user[2]}</MainText> <br />

                <TitleText>{title[3]}</TitleText>
                <MainText>{user[3]}</MainText> <br />
            </div>
        </>
    )
}

export default Hero