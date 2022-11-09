import { Container, Links, Content } from "./styles";

import { Tag } from '../../components/Tag';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';
import { ButtonText } from '../../components/ButtonText';


export function Details() {
    
    return (
        <Container>
            <Header />

            <main>
                <Content>
                <ButtonText title="Excluir nota"/>
                
                <h1>
                    Introdução ao React
                </h1>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est vero saepe soluta corporis, asperiores omnis molestiae velit dolorem veniam quia alias exercitationem quas repellat reprehenderit, corrupti voluptate inventore. Reprehenderit, molestiae.
                </p>

                <Section title="Links úteis">
                    <Links>
                        <li><a href="#">https://www.rocketseat.com.br</a></li>
                        <li><a href="#">https://www.rocketseat.com.br</a></li>
                    </Links>
                </Section>

                <Section title="Marcadores">
                    <Tag title="express"></Tag>
                    <Tag title="nodejs"></Tag>
                </Section>
                
                <Button title="Voltar"/>
                
                </Content>
            </main>
        </Container>
    )
}