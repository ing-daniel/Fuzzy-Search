import React, {useEffect, useState, Fragment} from 'react';
import { _get } from './common/http';
import { Title } from './components/title';
import { TableTransactions } from './containers/table-transactions';
import { ContainerGlobal } from './components/conatiner-global';
import { Input } from './components/input';
import { levenshtein } from './common/fruzzysearch';

export const App = () =>{

    const [states, setState] = useState({
        transactions: [],
        filter: ''
    });

    const changeFilter  =(filter) =>{
        setState({...states, filter});
    }

    const filter = () =>{
        if(states.filter === '') return states.transactions;
        return states.transactions.filter( e => {
            let text = Object.values(e).join("");
            let isMatch = levenshtein(states.filter ,text, 0.85);
            return isMatch;
        });
    }

    useEffect(() =>{
        _get('zc5ht')
        .then(res => {
            const {transactions} = res.data;
            setState({...states, transactions})
        })
        .catch(err => console.error(err))
    },[])

    return(
        <ContainerGlobal>
            <Title>List transactions</Title>
            <br />
            <Input placeholder='Text search' onChange={(e) => changeFilter(e.target.value)}></Input>
            <TableTransactions list={filter()} />
        </ContainerGlobal>
    )
}