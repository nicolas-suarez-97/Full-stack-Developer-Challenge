export class Location {
    constructor(
        public id: string,
        public name: string,
        public area: number,
        public parentId: string,
        public parentname: string
    ) {}
}
