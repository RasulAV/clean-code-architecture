export class GraphQLTransport {
  constructor(private getToken: () => string | null) {}

  private async fetchGraphQL(
    query: string,
    variables: Record<string, any> = {}
  ) {
    const response = await fetch("/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.getToken()}`,
      },
      body: JSON.stringify({ query, variables }),
    });

    return response.json();
  }

  async query(query: string, variables: Record<string, any> = {}) {
    return this.fetchGraphQL(query, variables);
  }

  async mutate(mutation: string, variables: Record<string, any> = {}) {
    return this.fetchGraphQL(mutation, variables);
  }
}
