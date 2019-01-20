export class Utils {
    static generateId(): number { // Créateur d'une clé aléatoire pour la création d'un objet en base (utilisé uniquement dans cette classe)
    var text = '';
    var possible = "0123456789";

    for (var i = 0; i < 15; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return parseInt(text, 10);
  }
}