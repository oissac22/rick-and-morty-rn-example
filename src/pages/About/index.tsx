import { StyleSheet } from "react-native";
import { ButtonLinkWeb } from "../../components/ButtonLinkWeb";
import { CText } from "../../components/CText";
import { PanelWithTitle } from "../../components/PanelWithTitle";
import { Title } from "../../components/Title";
import { VerticalSpace } from "../../components/VerticalSpace";

export function About()
{
    return <>
        <Title title="Sobre o desenvolvedor" />
        <VerticalSpace />
        <TextInfo title="Sobre o desenvolvedor">
            <CText>
                Meu nome é Cássio da Silva e sou desenvolvedor
                de sistema desde 2001 começando aos 16 anos.
            </CText>
        </TextInfo>
        <VerticalSpace />
        <TextInfo title="Sobre este aplicativo">
            <CText>
                Este aplicativo foi desenvolvido como uma prova
                para análise de capacidade de produção que seria
                realizada por uma empresa específica.
            </CText>
        </TextInfo>
        <TextInfo title="Contatos">
            <ButtonLinkWeb
                url="https://www.linkedin.com/in/c%C3%A1ssio-silva-04b9bb177/"
                text="LinkedIn"
                style={styleAbout.links}
            />
            <ButtonLinkWeb
                url="https://www.youtube.com/channel/UC2nM2-ytN-q6X19zbfwnE8Q"
                text="Youtube"
                style={styleAbout.links}
            />
            <ButtonLinkWeb
                url="mailto:oissac22@hotmail.com"
                text="E-mail"
                style={styleAbout.links}
            />
        </TextInfo>
        <VerticalSpace />
    </>
}

export function TextInfo(props:{ title:string, children:any })
{
    return <PanelWithTitle title={props.title}>
        {props.children}
    </PanelWithTitle>
}

const styleAbout = StyleSheet.create({
    links: {
        paddingBottom: 30
    }
})