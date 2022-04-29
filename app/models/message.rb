class Message < ApplicationRecord
belongs_to :user
validates :body, presence: true
scope :custom_dispaly, -> { order(:created_at).last(10) }
end
