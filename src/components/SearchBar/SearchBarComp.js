import React, { useState, useRef } from 'react';
import { Form, Button, Input } from './SearchBarElem';
import {AiOutlineSearch} from 'react-icons/ai'

/* Todo Drop Down elements: Need Server Up and running*/

const SearchBar = () => {
    
    const [input, setInput] = useState("");
    const [barOpened, setBarOpened] = useState(false);
    const formRef = useRef();
    const inputFocus = useRef();

    const onFormSubmit = (event) => {
        // When form submited, clear input, close the searchbar and do something with input
        event.preventDefault();
        setInput("");
        setBarOpened(false);
        // After form submit, do what you want with the input value
        console.log(`Form was submited with input: ${input}`);
    };
    
    return(
        <> 
            <Form
                barOpened={barOpened}
                onClick={() => {
                    // When form clicked, set state of baropened to true and focus the input
                    setBarOpened(true);
                    inputFocus.current.focus();
                }}
                // on focus open search bar
                onFocus={() => {
                    setBarOpened(true);
                    inputFocus.current.focus();
                }}
                // on blur close search bar
                onBlur={() => {
                    setBarOpened(false);
                }}
                // On submit, call the onFormSubmit function
                onSubmit={onFormSubmit}
                ref={formRef}
            >
                <Button type="submit" barOpened={barOpened}>
                    <AiOutlineSearch size={28} />
                </Button>
                <Input
                    onChange={(event) => setInput(event.target.value)}
                    ref={inputFocus}
                    value={input}
                    barOpened={barOpened}
                    placeholder="Search for a movie..."
                />
            </Form>
        </>
   );
};

export default SearchBar;