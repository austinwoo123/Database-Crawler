// Creating our Character model
module.exports = function (sequelize, DataTypes) {
    var Character = sequelize.define("Character", {
        //character's intelligence stat (not including items?)
        intelligence: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        //character's strength stat (not including items?)
        strength: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        //character's dexterity stat (not including items?)
        dexterity: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        // a short description of the character
        description: {
            type: DataTypes.STRING
        }
    });

    // each character has one creature that killed them, it starts out as null and updates when the character dies
    Character.associate = function (models) {
        Character.hasOne(models.Creature, {
            foreignKey: {
                defaultValue: null
            }
        });
    };

    // makes it so each every character has one inventory
    Character.associate = function (models) {
        Character.hasOne(models.Inventory, {
            foreignKey: {
                allowNull: false,
                onDelete: "cascade"
            }
        });
    };



    return Character;
};