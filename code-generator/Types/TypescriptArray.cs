using System;
using System.Linq;

namespace CodeGenerator.Types
{
    class TypescriptArray : TypescriptClass
    {
        string importName;

        public override string ImportName => importName;

        public TypescriptArray(Type type, TypescriptClassCollection userTypes) : base(type)
        {
            var generics = type.GenericTypeArguments;
            while (!generics.Any())
                generics = (type = type.BaseType).GenericTypeArguments;

            Type = generics.First();
            importName = Type.Name;
            base.Name = $"{FromType(Type, userTypes)}[]";
        }
    }
}