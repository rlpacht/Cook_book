# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20151011211526) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "favorites", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "notes", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "text"
    t.integer  "recipe_id"
    t.integer  "user_id"
  end

  add_index "notes", ["recipe_id"], name: "index_notes_on_recipe_id", using: :btree
  add_index "notes", ["user_id"], name: "index_notes_on_user_id", using: :btree

  create_table "recipes", force: :cascade do |t|
    t.datetime "created_at",                         null: false
    t.datetime "updated_at",                         null: false
    t.string   "yummly_id"
    t.string   "name"
    t.integer  "time"
    t.string   "source_url"
    t.string   "small_img_url"
    t.integer  "number_of_servings"
    t.string   "ingredients"
    t.string   "large_img_url"
    t.string   "medium_img_url"
    t.boolean  "is_data_complete",   default: false, null: false
  end

  create_table "user_favorites", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "user_id"
    t.integer  "recipe_id"
  end

  add_index "user_favorites", ["recipe_id"], name: "index_user_favorites_on_recipe_id", using: :btree
  add_index "user_favorites", ["user_id"], name: "index_user_favorites_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "name"
    t.string   "email"
    t.string   "password_digest"
  end

end
