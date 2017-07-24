export class PackageSummary {
  public apiVersion: string;
  public kind: string;
  public name: string;
  public origin: string;
  public version: string;

  constructor(
    apiVersion: string,
    kind: string,
    name: string,
    origin: string,
    version: string) {
    this.apiVersion = apiVersion;
    this.kind = kind;
    this.name = name;
    this.origin = origin;
    this.version = version;
  }
}
