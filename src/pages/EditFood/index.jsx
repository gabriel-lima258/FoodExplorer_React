import { useNavigate } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import * as C from './style'
import {AiOutlineLeft, AiOutlineDownload} from 'react-icons/ai'
import {FiArrowDown} from 'react-icons/fi'

import { Header } from '../../components/Header';
import { HeaderDesktop } from "../../components/HeaderDesktop";
import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';
import { InputFile } from '../../components/InputFile';
import { Footer } from '../../components/Footer';
import { Select } from '../../components/Select';
import { Section } from '../../components/Section';
import { Tags } from '../../components/Tags';
import { TextArea } from '../../components/TextArea';

export function EditFood(){

    const navigate = useNavigate();

    const isMobile = useMediaQuery({ maxWidth: 1023})

    function handleBack(){
        navigate("/");
    }


    return(
        <C.Container>

            {isMobile ? <Header/> : <HeaderDesktop/>}

            <C.Content>
                <C.Form>
                    
                <ButtonText title="Voltar" icon={AiOutlineLeft} onClick={handleBack}/>

                    <h1>Editar Prato</h1>

                        <Section title="Imagem do prato">
                            <InputFile
                            type="file"
                            icon={AiOutlineDownload}
                            label="Selecione imagem para alterá-la"
                            />
                        </Section>

                        <Section title="Nome">
                            <Input
                            placeholder="Salada César"
                            type="text"
                            />
                        </Section>
                        
                        <Section title="Categoria">
                            <Select
                            option="Selecionar"
                            icon={FiArrowDown}
                            />
                        </Section>

                        <Section title="Ingredientes">
                            <div className="tags">
                            <Tags
                            value="Pão"
                            placeholder="Adicionar"
                            />
                            <Tags
                            isnew
                            placeholder="Adicionar"
                            />
                            </div>
                        </Section>

                        <Section title="Preço">
                            <Input
                            placeholder="R$ 10.00"
                            type="text"
                            />
                        </Section>

                        <Section title="Descrição">
                            <TextArea
                            placeholder="A Salada César é uma opção refrescante para o verão."
                            />
                        </Section>
                        
                        <div className="buttons">
                            <Button
                                type="button"
                                title="Encluir prato"
                                exclude
                            />
                            <Button
                                type="button"
                                title="Salvar alterações"
                                add
                            />
                          
                        </div>
                       
                </C.Form>

            </C.Content>
            <Footer/>
            
        </C.Container>
    );
}