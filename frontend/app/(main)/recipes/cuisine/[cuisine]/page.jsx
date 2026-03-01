"use client"

import { getMealsByArea } from "@/actions/mealdb.actions"
import { useParams } from "next/navigation"
import RecipeGrid from "@/components/RecipeGrid"

export default function CuisineRecipesPage(){
    const params=useParams();
    const category=params.category;
    return (
        <RecipeGrid 
        type="cuisine"
        category={cuisine}
        fetchAction={getMealsByArea}
        backLink="/dashboard"
        />
    )
}