import { GraphQLTransport } from "../../transport/graphql/transport";

export interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}

export interface ITodoService {
  getTodos(): Promise<ITodo[]>;
  addTodo: (title: string) => Promise<ITodo>;
  updateTodo: (id: string, completed: boolean) => Promise<ITodo>;
  deleteTodo: (id: string) => Promise<boolean>;
}

export class TodoService implements ITodoService {
  constructor(private transport: GraphQLTransport) {}

  async getTodos(): Promise<ITodo[]> {
    const query = `
      query GetTodos {
        todos {
          id
          title
          completed
        }
      }
    `;
    const response = await this.transport.query(query);
    return response.data.todos;
  }

  async addTodo(title: string): Promise<ITodo> {
    const mutation = `
      mutation AddTodo($title: String!) {
        addTodo(title: $title) {
          id
          title
          completed
        }
      }
    `;
    const response = await this.transport.mutate(mutation, { title });
    return response.data.addTodo;
  }

  async updateTodo(id: string, completed: boolean): Promise<ITodo> {
    const mutation = `
      mutation UpdateTodo($id: ID!, $completed: Boolean!) {
        updateTodo(id: $id, completed: $completed) {
          id
          title
          completed
        }
      }
    `;
    const response = await this.transport.mutate(mutation, { id, completed });
    return response.data.updateTodo;
  }

  async deleteTodo(id: string): Promise<boolean> {
    const mutation = `
      mutation DeleteTodo($id: ID!) {
        deleteTodo(id: $id)
      }
    `;
    const response = await this.transport.mutate(mutation, { id });
    return response.data.deleteTodo;
  }
}
