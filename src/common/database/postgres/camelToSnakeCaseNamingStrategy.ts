import { DefaultNamingStrategy, NamingStrategyInterface } from 'typeorm';

export class CamelToSnakeNamingStrategy extends DefaultNamingStrategy implements NamingStrategyInterface {

  columnName(propertyName: string, customName: string, embeddedPrefixes: string[]): string {
    return customName || this.snakeCase(propertyName);
  }

  primaryKeyName(tableOrName: string, columnNames: string[]): string {
    const name = columnNames.length > 1
      ? columnNames.reduce((name, columnName) => name + '_' + columnName)
      : columnNames[0];

    return 'pk_' + tableOrName + '_' + name;
  }

  relationName(propertyName: string): string {
    return propertyName;
  }

  joinColumnName(relationName: string, referencedColumnName: string): string {
    return this.snakeCase(relationName + '_' + referencedColumnName);
  }

  joinTableName(firstTableName: string, secondTableName: string, firstPropertyName: string, secondPropertyName: string): string {
    return this.snakeCase(firstTableName + '_' + firstPropertyName.replace(/\./gi, '_') + '_' + secondTableName);
  }

  joinTableColumnName(tableName: string, propertyName: string, columnName?: string): string {
    return this.snakeCase(tableName + '_' + (columnName ? columnName : propertyName));
  }

  classTableInheritanceParentColumnName(parentTableName: any, parentTableIdPropertyName: any): string {
    return this.snakeCase(parentTableName + '_' + parentTableIdPropertyName);
  }

  protected snakeCase(name: string): string {
    return name.replace(/([A-Z])/g, (letter) => `_${letter.toLowerCase()}`);
  }
}
