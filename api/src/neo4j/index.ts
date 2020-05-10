import { APIContext } from "@types";
import { DataSource, DataSourceConfig } from "apollo-datasource";

// example: https://bit.ly/2yy8LNf

class Neo4JDataSource extends DataSource {
    private context: APIContext;

    initialize(config: DataSourceConfig<APIContext>): void | Promise<void> {
        this.context = config.context;
    }
}
