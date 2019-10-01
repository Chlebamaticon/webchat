export function coerceBooleanProperty(property: any) {
    return property != null && `${ property }` !== 'false';
}