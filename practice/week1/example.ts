// 주소를 호출해서 반환하는 함수와 데이터 타입을 만들고 화면에 출력

const fetchTodo = async (): Promise<{ userId: number; id: number; title: string; completed: boolean }> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const todo = await response.json();
  return todo;
};

fetchTodo().then(todo => console.log('Todo:', todo));
