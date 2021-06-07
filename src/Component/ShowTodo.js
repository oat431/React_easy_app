import { Container,ListGroup } from 'react-bootstrap';
var todo_list = [
    'list1',
    'list2',
    'list3',
    'list4',
    'list5',
    'list6',
    'list7',
    'list8',
    'list9',
    'list10',
];
function ShowTodo(){
    return (
        <Container>
            <ListGroup as='ul'>
                {todo_list.map((item)=>{
                    return <ListGroup.Item as='li'>{item}</ListGroup.Item>;
                })}
            </ListGroup>
        </Container> 
    );
}

export default ShowTodo;